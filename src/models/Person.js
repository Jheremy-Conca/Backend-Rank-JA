import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["MIEMBRO", "VISITA"],
      default: "MIEMBRO",
    },
    points: {
      type: Number,
      default: 0,
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Person", personSchema);
