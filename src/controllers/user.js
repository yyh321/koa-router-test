

class User {
  async login(ctx,next) {
    ctx.body = '<h1>用户登录页面</h1>'
  }

  async logout(ctx,next) {
    ctx.body = '<h1>用户退出登录</h1>'
  }
}

module.exports = new User()


