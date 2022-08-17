// 导入连接池
const connection = require('../app/db');

class GoodsService{
  // 获取商品详情信息
  async detail(id){
    const statement = `
      SELECT 
        *
      FROM goods
      WHERE id = ?;
    `;
    const [[result]] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new GoodsService();