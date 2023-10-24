"use strict";

const { Review } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    await Review.bulkCreate(
      [
        {
          spotId: 1,
          userId: 2,
          review: "Not alliance friendly",
          stars: 1,
        },
        {
          spotId: 2,
          userId: 3,
          review: "Nice to not see any horde here.",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 4,
          review: "The history of dwarfs are amazing",
          stars: 4,
        },
        {
          spotId: 4,
          userId: 5,
          review: "The zapplin broke on us.",
          stars: 1,
        },
        {
          spotId: 5,
          userId: 1,
          review: "View is amazing but this place is hard to find",
          stars: 3,
        },
      ],
      { validate: true }
    );
  },

  //   async down(queryInterface, Sequelize) {
  //     options.tableName = "Reviews";
  //     const Op = Sequelize.Op;
  //     return queryInterface.bulkDelete(options, {
  //       spotId: {
  //         [Op.in]: [1, 2, 3],
  //       },
  //     });
  //   },
  // };

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options);
  },
};
