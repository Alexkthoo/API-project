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
            "Ironforge is the capital city of the dwarves, proud members of the Alliance.",
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
            "Orgrimmar ['ɔɹgɹɪmɑɹ] is the capital city of the orcs, and the Horde as a whole. ",
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
            "Thunder Bluff is the tauren capital city located in the northern part of the region of Mulgore on the continent of Kalimdor.",
          price: 50,
        },
        {
          ownerId: 1,
          address: "Darnassus",
          city: "Teldrassil",
          state: "Kalimdor",
          country: "Azeroth",
          lat: 53.7749,
          lng: 22.4194,
          name: "Darnassus",
          description:
            "Darnassus is the capital city of the night elves, located on the island of Teldrassil in Kalimdor.",
          price: 350.75,
        },
        {
          ownerId: 2,
          address: "Undercity",
          city: "Tirisfal Glades",
          state: "Eastern Kingdoms",
          country: "Azeroth",
          lat: 61.7749,
          lng: 41.4194,
          name: "Undercity",
          description:
            "Undercity is the capital city of the Forsaken, located beneath the ruins of Lordaeron in Tirisfal Glades.",
          price: 180.25,
        },
        {
          ownerId: 3,
          address: "Gnomeregan",
          city: "Dun Morogh",
          state: "Eastern Kingdoms",
          country: "Azeroth",
          lat: 49.7749,
          lng: 61.4194,
          name: "Gnomeregan",
          description:
            "Gnomeregan is the technological city of the gnomes, hidden underground in Dun Morogh.",
          price: 400.50,
        },
        {
          ownerId: 4,
          address: "Exodar",
          city: "Azuremyst Isle",
          state: "Kalimdor",
          country: "Azeroth",
          lat: 59.7749,
          lng: 12.4194,
          name: "Exodar",
          description:
            "Exodar is the crystalline capital city of the draenei, situated on Azuremyst Isle in Kalimdor.",
          price: 275.60,
        },
        {
          ownerId: 5,
          address: "Shattrath City",
          city: "Terokkar Forest",
          state: "Outland",
          country: "Azeroth",
          lat: -34.7749,
          lng: 110.4194,
          name: "Shattrath City",
          description:
            "Shattrath City is the sanctuary city in Outland, serving as a neutral hub for both the Alliance and Horde.",
          price: 800.30,
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
