// 导入app实例
const app = require('./app');

// 导入config文件获取端口
const { APP_PORT } = require('./app/config');

// 连接数据库
require('./app/db');

// 启动服务
app.listen(APP_PORT, () => {
  console.log(`服务在端口${APP_PORT}启动成功~`);
})