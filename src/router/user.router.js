// 导入中间件
const { create, login, update, info } = require('../controller/user.controller');
// 导入做其他验证的中间件
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');
/**
 * verifyAuth：验证token,
 * verifyLogin： 验证登录
 */
const { verifyAuth, verifyLogin } = require('../middleware/auth.middleware');

module.exports = Router => {
  // 创建路由对象
  const userRouter = new Router({ prefix: '/users' });

  // 注册用户
  userRouter.post('/register', verifyUser, handlePassword, create);

  // 用户登录
  userRouter.post('/login', verifyLogin, handlePassword, login);

  // 修改用户信息
  userRouter.put('/update/:id', verifyAuth, update);

  // 根据用户id查询对应数据
  userRouter.get('/:id', verifyAuth, info)


  return userRouter;
}