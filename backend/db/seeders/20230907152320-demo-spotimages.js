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
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07058d7c-5a1d-4fef-9320-85f624bc3746/dfs5gev-32d0306d-fa7f-4553-b913-8790766f7426.png",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07058d7c-5a1d-4fef-9320-85f624bc3746/dfs5g04-45cb0d19-fd93-48d8-8244-57b14b5d1f39.png",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9f2f40f-649c-4cf6-85d5-fd2cd8249129/d19ujop-72264654-3c62-484f-9ccd-a153e92bd40c.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://www.home-designing.com/wp-content/uploads/2010/05/ironman_stark_house_aerial_art.jpg",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://customizeminifiguresintelligence.files.wordpress.com/2020/06/panlos613001_004.jpg?w=723",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab3f60d0-bca7-4051-a7bc-2d032a6bd122/d4yd797-9b17425c-b2f7-4a72-96f2-884deddda7b3.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0bb46ca-d0b7-4eee-8eb5-dd07367838c0/d6p3gmw-cba9bbab-2054-4035-98f1-f30009417853.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7b9ee76-7b3f-40a4-bc80-88f6f314ba7e/dczxjva-1cb711b5-8077-4700-9641-30f41bac66bd.png",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60cefd3a-23dc-4018-91c9-94437a043cd7/dne5s4-8c77f589-3c35-45c3-8302-a6b65580fe5c.jpg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3a332d4-7130-4d64-bd18-ab1b295d8f11/ddhv0il-0123b7e5-5576-4b0d-86dd-41c01271c3fc.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://pbs.twimg.com/media/EfeYg7qWoAAlqEg.jpg:large",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://wow.zamimg.com/uploads/guide/seo/7648.jpg?1546724238",
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
