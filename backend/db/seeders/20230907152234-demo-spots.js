"use strict";
const { Spot } = require("../models");

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    await Spot.bulkCreate(
      [
        {
          ownerId: 1,
          address: "123 Main St",
          city: "New York",
          state: "New York",
          country: "USA",
          lat: 40.7128,
          lng: -74.006,
          name: "Central Park",
          description: "A beautiful park in the heart of New York City",
          price: 10.99,
        },
        {
          ownerId: 2,
          address: "456 Elm St",
          city: "Los Angeles",
          state: "California",
          country: "USA",
          lat: 34.0522,
          lng: -118.2437,
          name: "Hollywood Walk of Fame",
          description:
            "Famous sidewalk featuring stars dedicated to celebrities",
          price: 15.99,
        },
        {
          ownerId: 3,
          address: "789 Oak St",
          city: "San Francisco",
          state: "California",
          country: "USA",
          lat: 37.7749,
          lng: -122.4194,
          name: "Golden Gate Bridge",
          description: "Iconic suspension bridge in San Francisco",
          price: 20.99,
        },
      ],
      {
        validate: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: {
        [Op.in]: [
          "Central Park",
          "Hollywood Walk of Fame",
          "Golden Gate Bridge",
        ],
      },
    });
  },
};
