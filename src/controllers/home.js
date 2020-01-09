

class HomeController {

  async home(ctx) {
    ctx.body = '<h1>我是Home页面！</h1>'
  }

  async upload(ctx) {
    ctx.body = '<h1>我是Home页面的上传方法！</h1>'
  }
}


module.exports = new HomeController()


