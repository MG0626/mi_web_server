// 数据库模块
const service = require('../service/cart.service');

class CartController{
  // 添加购物车
  async add(ctx){
    const { user_id, unit_price, goods_id, version, color } = ctx.request.body;
    // 判断该用户的购物车中是否存在同样的商品, is_exist为true则为存在，false为不存在
    const goods = await service.getGoods(user_id, goods_id, version, color);
    let result;
    if (goods.length !== 0) {
      // 获取数据
      let { id, count } = goods[0];
      count++;
      // 数量加1
      result = await service.updateCount(id, count);
    }else{
      result = await service.add(user_id, unit_price, goods_id, version, color);
    }
    ctx.status = 201;
    ctx.body = result;
  }

  // 获取购物车列表
  async list(ctx){
    // 当前用户id
    const { id } = ctx.params;
    // 获取数据
    const result = await service.list(id);
    ctx.body = result;
  }

  // 修改购物车商品选中状态
  async status(ctx){
    // 获取商品id
    const { id } = ctx.params;
    // 获取状态
    const { is_status } = ctx.request.body;
    // 修改
    const result = await service.status(id, is_status);
    ctx.body = result;
  }

  // 修改商品数量
  async count(ctx){
    // 获取商品id
    const { id } = ctx.params;
    console.log(id);
    // 获取当前数量
    const { count } = ctx.request.body;
    // 修改
    const result = await service.updateCount(id, count);
    ctx.body = result;
  }

  // 从购物车中删除对应商品
  async remove(ctx){
    
  console.log('object');
    // 获取商品id
    const { id } = ctx.params;
    // 删除
    const result = await service.remove(id);
    ctx.body = result;
  }
}

module.exports = new CartController();