// 连接池
const connection = require('../app/db');

class PayService{
  // 获取总价格 
  async calcTotal(arr){
    const statement = `SELECT  id, versions FROM goods WHERE id = ?`;
    // 总价格
    let total = 0;
    for (const item of arr) {
      const [[res]] = await connection.execute(statement, [item.id]);
      // 获取选中版本价格
      let  price  = 0;
      for (const v of res.versions) {
        if(v.name === item.version) {
          price = v.price;
        }
      }
      total += price * item.count;
    }
    return total;
  }

  // 添加订单
  async add(id, info){
    const { goods, total, address, orderNumber } = info;
    const statement = `INSERT INTO \`order\` (order_number, total, address, goods_list, user_id) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [orderNumber, total, address, goods, id]);
    return result;
  }

  // 获取订单列表
  async list(id, status){
    console.log(status);
    const statement = `SELECT * FROM \`order\` WHERE user_id = ? ${status || status === 0 ? `AND is_status = ${status}` : ''} ORDER BY createAt DESC`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 根据订单号获取对应信息，并且订单为未付款状态
  async info(num){
    const statement = `SELECT * FROM \`order\` WHERE order_number = ? AND is_status = 0`;
    const [[result]] = await connection.execute(statement, [num]);
    return result;
  }

  // 根据订单号改变付款方式，并且订单为未付款状态
  async type(type, num){
    const statement = `UPDATE \`order\` SET type = ?, is_status = 1 WHERE order_number = ? AND is_status = 0`;
    const [result] = await connection.execute(statement, [type, num]);
    return result;
  }

  // 删除订单
  async remove(id){
    const statement = `DELETE FROM \`order\` WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new PayService();