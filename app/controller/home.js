'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    ctx.logger.info(app.model.User.findAll())
    ctx.body = await app.model.User.findAll();
  }
}

module.exports = HomeController;
