"use strict";
const { Spot } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    await Spot.bulkCreate(
      [
        {
          ownerId: 1,
          address: "111 demo1 st",
          city: "San Diego",
          state: "California",
          country: "United States of America",
          lat: 11.7645358,
          lng: -112.4730327,
          name: "Kit Kat",
          description: "Place where Kit Kat grows",
          price: 11,
        },
        {
          ownerId: 2,
          address: "222 fake1 Lane",
          city: "Portland",
          state: "Oregon",
          country: "United States of America",
          lat: 22.7645358,
          lng: -222.4730327,
          name: "Nike",
          description: "Just do it",
          price: 22,
        },
        {
          ownerId: 3,
          address: "333 faker1 dr",
          city: "New York",
          state: "New York",
          country: "United States of America",
          lat: 33.7645358,
          lng: -122.4730327,
          name: "Mario",
          description: "House of Mario",
          price: 33,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        name: {
          [Op.in]: ["Kit Kat", "Nike", "Mario"],
        },
      },
      {}
    );
  },
};
