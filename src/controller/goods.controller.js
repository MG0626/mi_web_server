const service = require("../service/goods.service");

class GoodsController{
  // 根据商品id查询对应商品数据
  async detail(ctx){
    // 商品id
    const { id } = ctx.params;
    const result = await service.detail(id);
    ctx.body = result;
  }
}

module.exports = new GoodsController();