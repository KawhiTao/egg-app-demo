"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    const profile = ctx.request.body.profile;
    const { userId, nickname } = profile;
    ctx.session.users = { userId, nickname, status: 1 };
    // app.redis.set(`user:${profile.userId}`, JSON.stringify(profile))
    // console.log(ctx.session);
    ctx.body = {
      session: ctx.session,
      code: 200,
    };
    ctx.status = 201;
  }
  async test() {
    const { ctx, app } = this;
    ctx.body = {
      session: ctx.session,
    };
  }
}
module.exports = UserController;
