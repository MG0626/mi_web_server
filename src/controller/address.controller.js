const service = require("../service/address.service");

class AddressController{
  // 获取用户地址列表
  async list(ctx){
    // 获取用户id
    const { id } = ctx.params;
    const result = await service.list(id);
    ctx.body = result;
  }

  // 添加用户收货地址
  async add(ctx){
    // 获取用户id
    const { id } = ctx.params;
    // 获取收货地址信息
    const info = ctx.request.body;
    // 添加
    const result = await service.add(id,info);
    
    ctx.status = 201;
    ctx.body = result;
  }

  // 修改地址
  async update(ctx){
    // 获取地址id
    const { id } = ctx.params;
    // 获取收货地址信息
    const info = ctx.request.body;
    // 修改
    const result = await service.update(id,info);
    
    ctx.body = result;
  }

  // 删除地址
  async remove(ctx){
    // 获取地址id
    const { id } = ctx.params;
     // 修改
    const result = await service.remove(id);
    
    ctx.body = result;
  }
}

module.exports = new AddressController();