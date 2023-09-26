"use strict";

const { SpotImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    await SpotImage.bulkCreate(
      [
        {
          spotId: 1,
          url: "https://a.cdn-hotels.com/gdcs/production116/d1103/0ffba831-3af6-4ec5-918b-edd67a21480e.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://www.home-designing.com/wp-content/uploads/2010/05/ironman_stark_house_aerial_art.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://customizeminifiguresintelligence.files.wordpress.com/2020/06/panlos613001_004.jpg?w=723",
          preview: true,
        },
      ],
      { validate: true }
    );
  },

  //   async down(queryInterface, Sequelize) {
  //     options.tableName = "SpotImages";
  //     const Op = Sequelize.Op;
  //     return queryInterface.bulkDelete(options, {
  //       spotId: {
  //         [Op.in]: [1, 2, 3],
  //       },
  //     });
  //   },
  // };

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    return queryInterface.bulkDelete(options);
  },
};
