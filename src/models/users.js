const User = (sequelize, dataTypes) =>
  sequelize.define("users", {
    firstName: {
      type: dataTypes.STRING,
    },
    lastName: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    phoneNumber: {
      type: dataTypes.INTEGER,
    },
  });

module.exports = User;
