const makeRatingFile = require("./rating-file.js")
const config = require("./config.js")
const { createRating, updateRating } = require("./calc.js")

module.exports = {
  makeRatingFile,
  config,
  createRating, 
  updateRating
}