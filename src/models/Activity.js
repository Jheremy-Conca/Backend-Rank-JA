import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  description: String,
  points: Number,
  action: {
    type: String,
    enum: ["SUMA", "RESTA"],
  },
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Activity", activitySchema);
