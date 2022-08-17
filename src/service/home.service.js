// 导入数据库连接池
const connection = require('../app/db');

class HomeService{
  // 获取导航栏列表或首页展示商品列表
  async list(limit){
    const statement = `
      SELECT 
        c.*,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', g.id,
            'name', g.name,
            'price', g.price,
            'cover', g.cover,
            'goods_desc', goods_desc
          )
        ) children
      FROM category c
      RIGHT JOIN (
        SELECT 
          *
        FROM goods
        WHERE is_status != 0
      ) g
      ON c.id = g.category_id
      WHERE c.is_status = 1
      GROUP BY c.id
    `;
    const [result] = await connection.execute(statement);

    // 限制children包含6条数据
    result.forEach(v => {
      v.children.splice(limit);
    })
    return result;
  }

  // 获取首页轮播图
  async getCarouselList(){
    const statemet = `
      SELECT 
        *
      FROM home_promotion
      WHERE is_status != 0;
    `;
    const [result] = await connection.execute(statemet);
    return result;
  }
}

module.exports = new HomeService();