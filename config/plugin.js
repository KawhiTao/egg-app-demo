'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    sequelize: {
        enable: true,
        package: 'egg-sequelize'
    },
    io: {
        enable: true,
        package: 'egg-socket.io'
    },
    redis: {
        enable: true,
        package: 'egg-redis'
    },
    axios: {
        app: true,
        agent: true,
    },
    axiosPlus: {
        enable: true,
        package: 'egg-axios-plus',
    },
};