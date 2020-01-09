
const Koa = require('koa')
const router = require('./routes/index')

const app = new Koa()


router(app)
app.listen(3000,()=>{
  console.log('app is linsting 3000 port');
  
})



