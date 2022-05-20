module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define("user_table", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: STRING,
      allowNull: false,
    },
    userPwd: {
      type: STRING,
      allowNull: false,
    },
    nickName: {
      type: STRING,
      allowNull: false,
    },
  });

  User.associate = function(){

  }

  return User;
};
