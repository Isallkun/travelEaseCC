import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Itinerary = db.define(
  "itinerary",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id'
      }
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
      },  
    numberofpeople: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },  
    added_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },  
  },
  {
    freezeTableName: true,
  }
);

export default Itinerary;