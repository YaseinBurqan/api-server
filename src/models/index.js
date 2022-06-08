"use strict";
require("dotenv").config();

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");

const food = require("./food");
const clothes = require("./clothes");
const user = require("./users");
const Collection = require("./collection-class");

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

let foodModel = food(sequelize, DataTypes);
let foodCollection = new Collection(foodModel);

let clothesModel = clothes(sequelize, DataTypes);
let clothesCollection = new Collection(clothesModel);

let usersModel = user(sequelize, DataTypes);
let userCollection = new Collection(usersModel);

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  Clothes: clothes(sequelize, DataTypes),
  User: user(sequelize, DataTypes),

  foodCollection: foodCollection,
  clothesCollection: clothesCollection,
  userCollection: userCollection,
};
