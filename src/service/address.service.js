// 连接池
const connection = require('../app/db');

class AddressService{
  // 获取用户地址列表
  async list(id){
    const statement = `SELECT * FROM address WHERE user_id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 添加收货地址
  async add(id, info){
    const { name, tel, address, full_address } = info;
    const statement = `INSERT INTO address (name, tel, address, full_address, user_id) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [name, tel, address, full_address, id]);
    return result;
  }

  // 修改地址
  async update(id, info){
    const { name, tel, address, full_address } = info;
    const statement = `UPDATE address SET name = ?, tel = ?, address = ?, full_address = ? WHERE id = ?`;
    const [result] = await connection.execute(statement, [name, tel, address, full_address, id]);
    return result;
  }

  // 删除地址
  async remove(id){
    const statement = `DELETE FROM address WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new AddressService();
