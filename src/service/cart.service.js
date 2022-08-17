// 连接池
const connection = require('../app/db');

class CartService{
  //查询该用户的购物车中是否存在同样的商品
  async getGoods(user_id, goods_id, version, color){
    const statement = `
      SELECT 
        *
      FROM carts
      WHERE 
        user_id = ? AND goods_id = ? AND version = ? AND color = ?
    `;
    const [result] = await connection.execute(statement, [user_id, goods_id, version, color]);
    return result;
  }
  // 添加购物车
  async add(user_id, unit_price, goods_id, version, color){
    const statement = `INSERT INTO carts (user_id, unit_price, goods_id, version, color) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [user_id, unit_price, goods_id, version, color]);
    return result;
  }

  // 修改购物车数量
  async updateCount(id, count){
    const statement = ` UPDATE carts SET count = ? WHERE id = ? `;
    const [result] = await connection.execute(statement, [count, id]);
    return result;
  }

  // 获取购物车列表
  async list(id){
    const statement = `
      SELECT 
        c.*,
        JSON_OBJECT(
          'name', g.name,
          'cover', g.cover,
          'is_status', g.is_status
        ) goods_info
      FROM carts c
      LEFT JOIN goods g
      ON c.goods_id = g.id
      WHERE c.user_id = ?
    `;
    const [result] = await connection.execute(statement, [id]);
    // 格式化状态为布尔值
    result.forEach(v => v.is_status = v.is_status === 1)
    return result;
  }
  // 修改购物车商品选中状态
  async status(id, status){
    const statement = `UPDATE carts SET is_status = ? WHERE id = ?`;
    const {result} = await connection.execute(statement, [Number(status), id]);
    return result;
  }

  // 从购物车列表中删除对应商品
  async remove(id){
    const statement = `DELETE FROM carts WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new CartService();