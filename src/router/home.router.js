// 中间件
const { nav, goods, carousel } = require("../controller/home.controller");

module.exports = Router => {
  const homeRouter = new Router({ prefix: '/home' });

  // 获取导航栏列表
  homeRouter.get('/nav', nav);

  // 获取首页展示商品列表
  homeRouter.get('/goods', goods);

  // 获取首页轮播图
  homeRouter.get('/carousel', carousel);

  return homeRouter;
}