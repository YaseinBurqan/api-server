const User = (sequelize, DataTypes) =>
  sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
  });

module.exports = User;
