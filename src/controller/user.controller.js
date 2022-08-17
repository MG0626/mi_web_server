// 导入jwt
const jwt = require('jsonwebtoken');

//导入私钥
const { PRIVATE_KEY } = require('../app/config');

// 数据库模块
const service = require('../service/user.service');

// 错误常量 
const errorTypes = require('../app/error-types');


class UserController {
  // 添加用户
  async create(ctx){
    const user = ctx.request.body;
    const result =  await service.create(user);
    ctx.status = 201;
    ctx.body = result;
  }

  // 用户登录
  async login(ctx) {
    // 获取用户名和密码
    const user = ctx.request.body;
    // 获取对应用户信息
    const result = await service.getUserInfo(user);
    // 如果没有数据返回，则说明密码错误
    if (result.length === 0) {
      const error = new Error(errorTypes.PASSWORD_ERROR);
      return ctx.app.emit('error', error, ctx);
    }
    // 获取当前时间
    const time = Date.now() + (60 * 60 * 24 * 1000);
    result[0].time = time;
    // 颁发token
    const { id, name, email } = result[0];
    const token = jwt.sign({ id, name, email }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, // 过期时间
      algorithm: 'RS256'
    });
    // 返回数据
    ctx.body = {
      ...result[0],
      token,
    };
  }

  // 修改用户信息
  async update(ctx){
    // 用户id
    const { id } = ctx.params;
    // 判断请求有没有携带参数
    if (!Object.keys(ctx.request.body).length) {
      const error = new Error(errorTypes.NO_DATA);
      return ctx.app.emit('error', error, ctx);
    }
    // 获取用户信息
    const { name, avatar, role_id } = ctx.request.body;
    // 保存用户信息
    const result = await service.update(id, name, avatar, role_id);

    ctx.body = result;
  }


  // 根据用户id获取对应的信息
  async info(ctx){
    // 获取用户id
    const { id } = ctx.params;

    const result = await service.getUserIdInfo(id);

    ctx.body = result;
  }
}

module.exports = new UserController();