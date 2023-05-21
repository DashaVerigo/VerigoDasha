/** @format */

import DataBase from "../db/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Apartments = DataBase.define("apartments", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const TypeApartments = DataBase.define("typeapartments", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Comments = DataBase.define("comments", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Comments);
Comments.belongsTo(User);

User.hasMany(Apartments);
Apartments.belongsTo(User);

TypeApartments.hasMany(Apartments);
Apartments.belongsTo(TypeApartments);

export { User, Basket, Apartments, TypeApartments, Comments };
