const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  username: String,
  password: String,
  habit: String,
  dayCounter: Number,
  dailyStatus: Number,
  habitStatus: String,
  rollingDay: Number
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
