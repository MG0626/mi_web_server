// 中间件
const { add, list, update, remove } = require("../controller/address.controller");
// 用于验证的中间件
const { verifyAuth } = require("../middleware/auth.middleware");

module.exports = Router => {
  const addressRouter = new Router({ prefix: '/address'});

  // 获取地址列表
  addressRouter.get('/list/:id', verifyAuth, list);
  // 添加用户收货地址
  addressRouter.post('/add/:id', verifyAuth, add);

  // 修改用户收货地址
  addressRouter.put('/update/:id', verifyAuth, update);

  // 删除用户地址
  addressRouter.delete('/delete/:id', verifyAuth, remove);

  return addressRouter;
}