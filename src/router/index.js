// 导入路由
const Router = require('koa-router');
const fs = require('fs');

module.exports = app => {
  // 获取路由文件
  fs.readdirSync(__dirname).forEach(file => {
    // 排除index.js文件
    if(file !== 'index.js'){
      // 获取路由
      const router = require(`./${file}`)(Router);
      // 添加路由
      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  })
}