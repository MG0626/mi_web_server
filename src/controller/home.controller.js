// 导入数据库模块
const service = require('../service/home.service');

class HomeController{

  // 获取导航栏列表
  async nav(ctx){
    const result = await service.list(6);
    ctx.body = result;
  }

  // 获取首页展示商品列表
  async goods(ctx){
    const result = await service.list(9);
    ctx.body = result;
  }

  // 获取首页轮播图
  async carousel(ctx){
    const result = await service.getCarouselList();
    ctx.body = result;
  }
}


module.exports = new HomeController();