// 中间件
const { add, list, status, count, remove } = require("../controller/cart.controller");
// 处理验证的中间件
const { verifyAuth } = require("../middleware/auth.middleware");

module.exports = Router => {
  const  cartRouter = new Router({prefix: '/cart'});

  // 添加购物车
  cartRouter.post('/add', verifyAuth, add);

  // 获取购物车列表
  cartRouter.get('/list/:id', verifyAuth, list);

  // 修改购物车商品选中状态
  cartRouter.put('/status/:id', verifyAuth, status);
  
  // 修改购物车商品数量
  cartRouter.put('/count/:id', verifyAuth, count);

  // 购物车删除对应商品
  cartRouter.delete('/delete/:id', verifyAuth, remove)
  
  return cartRouter;
}