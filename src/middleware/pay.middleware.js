// 数据库模块
const service = require('../service/pay.service');
// 错误常量
const errorTypes = require('../app/error-types');

// 生成订单号
const generateOrderNumber = async (ctx, next) => {
  // 获取用户id
  const { id } = ctx.params;
  // 商品数据
  // 生成6位随机数
  let random = '';
  for (let i = 0; i < 6; i++) {
    random += Math.floor(Math.random() * 10).toString();
  }
  // 生成当前时间戳
  const time = Date.now().toString();
  // 订单号
  const orderNumber = time + id + random;
  // 保存到ctx上
  ctx.info.orderNumber = orderNumber;
  await next();
}

// 计算总价格
const calcTotalPrice = async (ctx, next) => {
  // 获取用户id
  const { id } = ctx.params;
  // 获取结算的信息
  const info = ctx.request.body;
  // 获取商品id，选中的版本version，数量count
  const goodsArr = info.goods.map(v => {
    return {
      id: v.goods_id,
      version: v.version,
      count: v.count
    }
  });
  // 获取总价格
  const total = await service.calcTotal(goodsArr);
  // 判断前台传过来的总价格是否一致
  if (total !== info.total) {
    const error = new Error(errorTypes.DATA_EXCEPTION);
    return ctx.app.emit('error', error, ctx);
  }
  // 一致
  ctx.info = info;
  await next();
}

module.exports = {
  generateOrderNumber,
  calcTotalPrice
}