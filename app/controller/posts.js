"use strict";

const Controller = require("egg").Controller;

class PostController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { userName, userPwd } = ctx.request.body;
    ctx.logger.info(ctx.request.body);
    ctx.body = await app.model.User.findOne({
      where: {
        userName: userName,
        userPwd: userPwd,
      },
    }).then(res=>{ return res}).catch((err) => {
      getLogger().error("xxx occur error=", err);
    });
  }
}

module.exports = PostController;
