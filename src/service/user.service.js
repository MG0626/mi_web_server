// 导入数据库连接池
const connection = require('../app/db');

class UserService {
  async create(user) {
    // role_id默认为2，即测试角色
    const { name, password, email, role_id = 9 } = user;
    const statement = `INSERT INTO users (name, password, email, role_id) VALUES (?, ?, ?, ?);`

    const [result] = await connection.execute(statement, [ name, password, email, role_id ]);

    return result;

  }

  // 根据用户名和密码查询对应用户
  async getUserInfo(user) {
    const { name, password } = user;
    const statement = `SELECT id, name, email, avatar FROM users WHERE name = ? AND password = ?;`;
    const [result] = await connection.execute(statement, [name, password]);

    return result;
  }

   // 修改用户信息
  async update(id, name, avatar){
    console.log(avatar);
    const statement = `UPDATE users SET name = ?, avatar = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [name, avatar, id]);

    return result;
  }

  // 根据用户名或邮箱查询用户
  async getByName(user){
    const { name, email } = user;
    const statement = `SELECT name, email FROM users WHERE name = ? OR email = ?;`
    const [ result ] = await connection.execute(statement, [name, email]);
    return result;
  }

  // 根据id获取对应用户信息
  async getUserIdInfo(id){
    const statement = `
      SELECT 
        users.id, 
        name, 
        email, 
        avatar, 
        users.createAt create_time, 
        users.updateAt update_time
      FROM users
      WHERE id = ?;
    `;
    const [result] = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new UserService();