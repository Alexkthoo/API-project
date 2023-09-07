const bcrypt = require("bcryptjs");
const express = require("express");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {
  Spot,
  User,
  SpotImage,
  Review,
  ReviewImage,
  Booking,
} = require("../../db/models");
const router = express.Router();

// GET ALL SPOTS //

router.get("/", async (req, res) => {
  const spots = await Spot.findAll({});

  for (let spot of spots) {
    previewImage = await SpotImage.findOne({
      where: {
        spotId: spot.id,
        preview: true,
      },
      attributes: ["url"],
    });
    if (previewImage)
      spot.dataValues.previewImage = previewImage.dataValues.url;

    const reviews = await Review.findAndCountAll({
      where: {
        spotId: spot.id,
      },
      attributes: ["stars"],
    });

    reviewSum = reviews.rows.reduce((accum, curr) => {
      return (accum = accum + curr.dataValues.stars);
    }, 0);
    avgRating = reviewSum / reviews.count;
    spot.dataValues.avgRating = avgRating;
  }

  return res.json({ Spots: spots });
});

module.exports = router;
