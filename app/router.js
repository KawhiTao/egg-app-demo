'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, io } = app;
    // router.get('/', controller.home.index);
    router.post('/api/posts', controller.posts.index)
    router.get('/api/music', controller.music.index)
    router.post('/api/user', controller.user.index)
    router.get('/api/user/test', controller.user.test)
        //socket.io
        // io.of('/').route('chat', io.controller.chat.index);
    io.of('/').route('exchange', io.controller.nsp.exchange);
    // io.of('/').route('room', io.controller.room.room)
    //ws://localhost:7001

};