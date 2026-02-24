import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
    },
    totalPoints: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

// 🔹 Middleware síncrono para mayúsculas
groupSchema.pre("save", function () {
  this.name = this.name.toUpperCase();
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
