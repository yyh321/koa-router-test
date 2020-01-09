
const Router = require('koa-router')
const {home,upload} = require('../controllers/home')
const router = new Router({
  prefix: '/home'
})

router.get('/index',home)
router.get('/upload',upload)


module.exports = router
