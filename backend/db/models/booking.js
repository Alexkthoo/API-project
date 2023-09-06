"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Booking, {
        foreignKey: "userId",
      });

      Booking.belongsTo(models.Spot, {
        foreignKey: "Spot",
      });
    }
  }
  Booking.init(
    {
      spotId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
