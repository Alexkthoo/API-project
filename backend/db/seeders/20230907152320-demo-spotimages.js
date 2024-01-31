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
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca85bac9-b1bd-48b9-9b43-cf65b22b0861/df4g2ta-baed92f9-7b6a-4008-b4dc-d387855c7f4c.png/v1/fill/w_1280,h_720,q_80,strp/silvermoon_city_by_lionelschramm_df4g2ta-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2E4NWJhYzktYjFiZC00OGI5LTliNDMtY2Y2NWIyMmIwODYxXC9kZjRnMnRhLWJhZWQ5MmY5LTdiNmEtNDAwOC1iNGRjLWQzODc4NTVjN2Y0Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dMIeQkwYzWkfmnCFvnxjBmLwUUE0bW6DfwE0aq2pYZ8",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07058d7c-5a1d-4fef-9320-85f624bc3746/dfs5g04-45cb0d19-fd93-48d8-8244-57b14b5d1f39.png/v1/fill/w_894,h_894,q_70,strp/concept_art___the_golden_throne_of_silvermoon_by_agnisagero_dfs5g04-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzA3MDU4ZDdjLTVhMWQtNGZlZi05MzIwLTg1ZjYyNGJjMzc0NlwvZGZzNWcwNC00NWNiMGQxOS1mZDkzLTQ4ZDgtODI0NC01N2IxNGI1ZDFmMzkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sHhcsEja-mGgg_m_b4hyAN4lPhWYUcoaX7XEvSKYhZw",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07058d7c-5a1d-4fef-9320-85f624bc3746/dfs5gev-32d0306d-fa7f-4553-b913-8790766f7426.png/v1/fill/w_894,h_894,q_70,strp/concept_art___silvermoon_s_street_in_the_morning_by_agnisagero_dfs5gev-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzA3MDU4ZDdjLTVhMWQtNGZlZi05MzIwLTg1ZjYyNGJjMzc0NlwvZGZzNWdldi0zMmQwMzA2ZC1mYTdmLTQ1NTMtYjkxMy04NzkwNzY2Zjc0MjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UoP1-N8u2NUgXEUtYf8h7NBhEFFQcadE6tITZKsNwaA",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://steamuserimages-a.akamaihd.net/ugc/993512944591188233/8F3469616A50FC7BFADB6D241182CF0B67932BEF/?imw=1024&imh=507&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://images3.alphacoders.com/640/640378.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://cdna.artstation.com/p/assets/images/images/033/260/452/large/dongming-yang-60.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://wallpapercave.com/wp/wp11106909.png",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://i.imgur.com/Rw6LiMG.jpeg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://wow.zamimg.com/uploads/screenshots/normal/867268.jpg",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://www.tomshardware.fr/content/uploads/sites/3/2021/03/wow.png",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7b9ee76-7b3f-40a4-bc80-88f6f314ba7e/dczxjva-1cb711b5-8077-4700-9641-30f41bac66bd.png/v1/fill/w_1205,h_663,q_70,strp/ironforge__world_of_warcraft__by_cutesexyrobutts_dczxjva-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA1IiwicGF0aCI6IlwvZlwvYTdiOWVlNzYtN2IzZi00MGE0LWJjODAtODhmNmYzMTRiYTdlXC9kY3p4anZhLTFjYjcxMWI1LTgwNzctNDcwMC05NjQxLTMwZjQxYmFjNjZiZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3EUlXH2yC8vb_Qm_yi6kRsJqAHFNTAZQM9qg_Q8Kbzk",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://pbs.twimg.com/media/D9L0oeXXYAADs-9.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://i.pinimg.com/originals/62/8c/23/628c23bd020f3baa9b6a4f989568f3b2.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://wow.zamimg.com/uploads/screenshots/normal/523340-movie-5-15.jpg",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://i.imgur.com/n4ciU4P.jpeg",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3a332d4-7130-4d64-bd18-ab1b295d8f11/ddhv0il-0123b7e5-5576-4b0d-86dd-41c01271c3fc.jpg/v1/fill/w_1024,h_449,q_75,strp/orgrimmar_remake_by_kiddo428_ddhv0il-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQ5IiwicGF0aCI6IlwvZlwvYjNhMzMyZDQtNzEzMC00ZDY0LWJkMTgtYWIxYjI5NWQ4ZjExXC9kZGh2MGlsLTAxMjNiN2U1LTU1NzYtNGIwZC04NmRkLTQxYzAxMjcxYzNmYy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MlhtQSsraSv0F3T873GoEsBUj91BfmYhkOF-EPYzXFI",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://pbs.twimg.com/media/EfeYg7qWoAAlqEg.jpg:large",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://cdnb.artstation.com/p/assets/images/images/015/225/963/large/jorge-jacinto-azeroth-journey-durotar-red.jpg?1547564255",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/410ce040-e462-4913-a649-321fff49b562/d1th0h8-abdb08cb-3006-4a5c-a477-d3dfb618ffdc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMGNlMDQwLWU0NjItNDkxMy1hNjQ5LTMyMWZmZjQ5YjU2MlwvZDF0aDBoOC1hYmRiMDhjYi0zMDA2LTRhNWMtYTQ3Ny1kM2RmYjYxOGZmZGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kq2pa-Bt1zhDK-fN4ssTTqoo2iTijTZ9xW1MUmLZl9g",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://i.pinimg.com/736x/59/ee/a8/59eea83e6e792f13e26a976c6f2baeb4.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://i.pinimg.com/originals/76/2c/2d/762c2d3395c0afaeee013573e60aebc7.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://wow.zamimg.com/uploads/blog/images/22976-thunder-bluff-in-unreal-engine-by-aleksandr-timoshenko.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/09/003.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://blizzardwatch.com/wp-content/uploads/2016/12/storytellers-circle.jpg",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://mmo-sankar.de/wp-content/uploads/2021/11/wow-classic-levelgebiete-allianz-horde.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://i.pinimg.com/originals/59/13/0f/59130fe619c0520a424b62e1b2e5670e.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://i.pinimg.com/originals/59/13/0f/59130fe619c0520a424b62e1b2e5670e.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://i.pinimg.com/originals/59/13/0f/59130fe619c0520a424b62e1b2e5670e.jpg",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://i.pinimg.com/originals/59/13/0f/59130fe619c0520a424b62e1b2e5670e.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://i.pinimg.com/originals/36/79/63/367963d932d9bbe78387f19585479811.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://helios-i.mashable.com/imagery/articles/06yDnMdsO86nqApqf7PtOdU/images-6.fill.size_2000x1125.v1611698841.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://helios-i.mashable.com/imagery/articles/06yDnMdsO86nqApqf7PtOdU/images-6.fill.size_2000x1125.v1611698841.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://helios-i.mashable.com/imagery/articles/06yDnMdsO86nqApqf7PtOdU/images-6.fill.size_2000x1125.v1611698841.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://helios-i.mashable.com/imagery/articles/06yDnMdsO86nqApqf7PtOdU/images-6.fill.size_2000x1125.v1611698841.jpg",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://helios-i.mashable.com/imagery/articles/06yDnMdsO86nqApqf7PtOdU/images-6.fill.size_2000x1125.v1611698841.jpg",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://gamepedia.cursecdn.com/wowpedia/f/fa/Traveler_Concept_Drawing.jpg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://gamepedia.cursecdn.com/wowpedia/f/fa/Traveler_Concept_Drawing.jpg",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://gamepedia.cursecdn.com/wowpedia/f/fa/Traveler_Concept_Drawing.jpg",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://gamepedia.cursecdn.com/wowpedia/f/fa/Traveler_Concept_Drawing.jpg",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://gamepedia.cursecdn.com/wowpedia/f/fa/Traveler_Concept_Drawing.jpg",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://64.media.tumblr.com/5d45ac602dfbb71c92d383d3fdb2c861/841481df0dedf376-53/s1280x1920/59d01927e35ed14af9e7e4dc0d516650959e1f99.jpg",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://64.media.tumblr.com/5d45ac602dfbb71c92d383d3fdb2c861/841481df0dedf376-53/s1280x1920/59d01927e35ed14af9e7e4dc0d516650959e1f99.jpg",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://64.media.tumblr.com/5d45ac602dfbb71c92d383d3fdb2c861/841481df0dedf376-53/s1280x1920/59d01927e35ed14af9e7e4dc0d516650959e1f99.jpg",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://64.media.tumblr.com/5d45ac602dfbb71c92d383d3fdb2c861/841481df0dedf376-53/s1280x1920/59d01927e35ed14af9e7e4dc0d516650959e1f99.jpg",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://64.media.tumblr.com/5d45ac602dfbb71c92d383d3fdb2c861/841481df0dedf376-53/s1280x1920/59d01927e35ed14af9e7e4dc0d516650959e1f99.jpg",
          preview: false,
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
