// 中间件
const { detail } = require("../controller/goods.controller");

module.exports = Router => {
  const goodsRouter = new Router({ prefix: '/goods' });

  // 根据商品id查询对应商品数据
  goodsRouter.get('/:id/detail', detail)

  return goodsRouter;
}