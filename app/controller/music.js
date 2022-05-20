"use strict";

const Controller = require("egg").Controller;

class MusicController extends Controller {
    async index() {
        const { ctx, app } = this;
        ctx.body = await ctx.axios.get("http://localhost:4000/banner?type=2", {})
    }
}

module.exports = MusicController;