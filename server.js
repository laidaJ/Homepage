//引入modules
const mongoose = require('mongoose');
const server = require('./app')
const dotenv = require('dotenv')
const newPassword = require('./password')

//设置config.env
dotenv.config({ path: './config.env' })

//引入mongoDB数据库
/*
const DB = process.env.Database.replace('<password>', process.env.Database_password)
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB connect success')
  } catch (error) {
    console.log(error)
  }
}
connectDB();
*/
//启动服务器
server.listen(process.env.Port, process.env.Localhost, () => {
  console.log(`server is running on ${process.env.Localhost}:${process.env.Port}`)
})

//设置密码
console.log(newPassword)
