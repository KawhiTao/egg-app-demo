// const room = 'room';

/* module.exports = app => {
    return async(ctx, next) => {
        ctx.socket.join(room);
        ctx.app.io.of('/').to(room).emit('online', { msg: 'welcome', id: ctx.socket.id });
        await next();
        // console.log('disconnection!');
    };
}; */

// app.js or agent.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready
    const room = await this.app.redis.get("room:demo");
    // console.log("!!!!!", app)
    if (!room) {
      // console.log(this.app.config)
      await this.app.redis.set("room:demo", JSON.stringify([]));
    }
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
    // console.log(this.app)
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}

module.exports = AppBootHook;
