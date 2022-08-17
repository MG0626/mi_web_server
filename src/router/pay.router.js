// 中间件
const { create, list, info, type, remove } = require("../controller/pay.controller");
// 用于验证的中间件
const { verifyAuth } = require("../middleware/auth.middleware");
const { generateOrderNumber, calcTotalPrice } = require("../middleware/pay.middleware");

module.exports = Router => {
  const payRouter = new Router({prefix: '/pay'});

  // 生成订单
  payRouter.post('/order/:id', verifyAuth, calcTotalPrice,  generateOrderNumber, create);

  // 获取订单列表
  payRouter.get(`/list/:id`, verifyAuth, list);

  // 根据订单号获取对应信息
  payRouter.get('/order/:order_number', verifyAuth, info);

  // 改变付款方式
  payRouter.put('/type/:order_number', verifyAuth, type);

  // 删除订单
  payRouter.delete('/order/delete/:id', verifyAuth, remove);

  return payRouter;
}