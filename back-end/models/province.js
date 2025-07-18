"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Province.hasMany(models.City, {
        foreignKey: "provinceId",
        as: "city",
      });
    }
  }
  Province.init(
    {
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      provinceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Province",
      tableName: "Provinces",
    }
  );
  return Province;
};
