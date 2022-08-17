const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

// 获取公钥和私钥
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../utils/keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../utils/keys/public.key'));


module.exports = {
  APP_PORT
} = process.env;

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;