// 数据库模块
const service = require('../service/pay.service');
// 购物车数据库模块
const { remove } = require('../service/cart.service');

class PayController{
  // 生成订单
  async create(ctx){
    // 获取用户id
    const { id } = ctx.params;
    // 添加订单
    const result = await service.add(id, ctx.info);
    // 删除购物车对应商品
    ctx.info.goods.forEach(async (v) => {
      await remove(v.id);
    })

    ctx.status = 201;
    ctx.body = {
      result,
      orderNumber: ctx.info.orderNumber
    };
  }

  // 订单列表
  async list(ctx){
    // 获取用户id
    const { id } = ctx.params;
    // 获取订单类型
    const { status } = ctx.query;
    const result = await service.list(id, status);
    ctx.body = result;
  }

  // 根据订单号获取对应信息
  async info(ctx){
    // 获取订单号
    const orderNumber = ctx.params.order_number;
    // 获取数据
    const result = await service.info(orderNumber);
    ctx.body = result;
  }

  // 改变支付方式
  async type(ctx){
    // 获取订单号
    const orderNumber = ctx.params.order_number;
    // 支付方式
    const { type } = ctx.query;
    // 获取数据
    const result = await service.type(type, orderNumber);
    ctx.body = result;
  }

  // 删除订单
  async remove(ctx){
    // 获取订单id
    const { id } = ctx.params;
    // 删除
    const result = await service.remove(id);
    ctx.body = result;
  }
}

module.exports = new PayController();