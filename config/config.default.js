/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1632724085839_2035";

  // add your middleware config here
  config.middleware = [];
  config.session = {
    key: "SESSION_ID", // 设置session cookie里面的key
    maxAge: 1000 * 60 * 30, // 设置过期时间
    httpOnly: true,
    encrypt: true,
    // renew: true // renew等于true 那么每次刷新页面的时候 session都会被延期
  };
  config.sequelize = {
    dialect: "mysql", // 表示使用mysql
    host: "127.0.0.1", // 连接的数据库主机地址
    port: 3306, // mysql服务端口
    database: "vant_demo_db", // 数据库名
    username: "root", // 数据库用户名
    password: "Wbg681003", // 数据库密码
    define: {
      // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    timezone: "+8:00", // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: {
      // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  };

  config.security = {
    csrf: {
      domainWhiteList: [
        "http://127.0.0.1:3000",
        "localhost:3000",
        "http://127.0.0.1:4000",
      ],
      enable: false,
    },
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: ["packet"],
      },
      "/example": {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
    redis: {
      host: "127.0.0.1",
      port: "6379",
    },
  };
  config.redis = {
    client: {
      host: "127.0.0.1",
      port: "6379",
      password: "",
      db: 0,
    },
  };

  config.cors = {
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    origin: "http://127.0.0.1:3000",
    credentials: true,
  };

  config.axiosPlus = {
    headers: {
      common: {
        "Content-Type": "application/json; charset=UTF-8",
        // 添加认证【例如】，也可以在请求拦截器中修改具体的request config
        // 'Authorization':'19980115_520'
      },
      // 可以设置请求头等属性
    },
    timeout: 5000, // 默认请求超时
    app: true, // 在app.js上启动加载
    agent: false, // 在agent.js上启动加载
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
