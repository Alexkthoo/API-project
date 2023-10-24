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
          address: "Silvermoon City",
          city: "Eversong Woods",
          state: "Eastern Kingdoms",
          country: "Azeroth",
          lat: 56.0522,
          lng: 14.2437,
          name: "Silvermoon City",
          description:
            "Silvermoon City is the crown jewel of the blood elves and their capital city.",
          price: 200.99,
        },
        {
          ownerId: 2,
          address: "Stormwind City",
          city: "Elwynn Forest",
          state: "Eastern Kingdoms",
          country: "Azeroth",
          lat: 42.7749,
          lng: 73.4194,
          name: "Stormwind City",
          description:
            "Stormwind City, located north of Elwynn Forest on Azeroth region's northwest coast, is the capital city of the kingdom of Stormwind and the largest human city on Azeroth.",
          price: 2250,
        },
        {
          ownerId: 3,
          address: "Ironforge",
          city: "Dun Morogh",
          state: "Eastern Kingdoms",
          country: "Azeroth",
          lat: 47.7749,
          lng: 58.4194,
          name: "Ironforge",
          description:
            "Ironforge is the capital city of the dwarves, proud members of the Alliance. It is the ancestral home of the Bronzebeard dwarves, and one of the oldest cities of Azeroth.",
          price: 500,
        },
        {
          ownerId: 4,
          address: "Orgrimmar",
          city: "Durotar",
          state: "Kalimdor",
          country: "Azeroth",
          lat: 45.71284123123,
          lng: 10.006123123,
          name: "Orgrimmar",
          description:
            "Orgrimmar ['ɔɹgɹɪmɑɹ] is the capital city of the orcs, and the Horde as a whole. Nestled into a system of valleys on the northern edge of Durotar, the imposing warrior city is the seat of the Horde Council that governs the entire faction. It is the primary hub for player characters of the Horde and, as with all capital cities, has banks, class and profession trainers, and auction houses.",
          price: 150,
        },
        {
          ownerId: 5,
          address: "Thunder Bluff",
          city: "Mulgore",
          state: "Kalimdor",
          country: "Azeroth",
          lat: 46.7749,
          lng: 55.4194,
          name: "Thunder Bluff",
          description:
            "Thunder Bluff is the tauren capital city located in the northern part of the region of Mulgore on the continent of Kalimdor. The entire city is built on bluffs several hundred feet above the surrounding landscape and is accessible by elevators on the southwestern and northeastern sides.",
          price: 50,
        },
      ],
      {
        validate: true,
      }
    );
  },

  //   async down(queryInterface, Sequelize) {
  //     options.tableName = "Spots";
  //     const Op = Sequelize.Op;
  //     return queryInterface.bulkDelete(options, {
  //       name: {
  //         [Op.in]: [
  //           "Central Park",
  //           "Hollywood Walk of Fame",
  //           "Golden Gate Bridge",
  //         ],
  //       },
  //     });
  //   },
  // };

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options);
  },
};
