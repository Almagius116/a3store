"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.belongsTo(models.Province, {
        foreignKey: "provinceId",
        as: "province",
      });
      City.hasMany(models.Shipping, {
        foreignKey: "cityId",
        as: "shipping",
      });
    }
  }
  City.init(
    {
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Provinces",
          key: "provinceId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "Cities",
    }
  );
  return City;
};
