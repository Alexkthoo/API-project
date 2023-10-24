"use strict";

const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Users";
    await User.bulkCreate(
      [
        {
          firstName: "Sylvanas",
          lastName: "Windrunner",
          email: "Sylvanas.Windrunner@wow.com",
          username: "Sylvanas_Windrunner",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Jaina",
          lastName: "Proudmoore",
          email: "Jaina.Proudmoore@wow.com",
          username: "Jaina_Proudmoore",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Magni",
          lastName: "Bronzebeard",
          email: "Magni.Bronzebeard@wow.com",
          username: "Magni_Bronzebeard",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          firstName: "Garrosh",
          lastName: "Hellscream",
          email: "Garrosh.Hellscream@wow.com",
          username: "Garrosh_Hellscream",
          hashedPassword: bcrypt.hashSync("password4"),
        },
        {
          firstName: "Baine",
          lastName: "Bloodhoof",
          email: "Baine.Bloodhoof@wow.com",
          username: "Baine_Bloodhoof",
          hashedPassword: bcrypt.hashSync("password5"),
        },
      ],
      { validate: true }
    );
  },

  //   async down(queryInterface, Sequelize) {
  //     options.tableName = "Users";
  //     const Op = Sequelize.Op;
  //     return queryInterface.bulkDelete(options, {
  //       username: { [Op.in]: ["ggnore", "Yoshinoya", "thegrumpyman"] },
  //     });
  //   },
  // };

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options);
  },
};
