// {app_root}/app/io/controller/nsp.js
const Controller = require("egg").Controller;

class NspController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of("/");
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;

    try {
      const { target, payload } = message;
      // console.log(target)
      if (!target) return;
      const receiverInfos = await app.redis.get(target);
      const socketId = JSON.parse(receiverInfos).socketId;
      const msg = ctx.helper.parseMsg("exchange", payload, { client, target });
      // nsp.sockets[]
      nsp.emit(socketId, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = NspController;
