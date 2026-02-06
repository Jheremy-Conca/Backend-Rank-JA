import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["CHAIM", "PABLO", "EMMANUEL", "SHALOM"],
      unique: true,
      required: true,
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Group", groupSchema);
