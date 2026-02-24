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

// Middleware para guardar el nombre en MAYÚSCULAS automáticamente
groupSchema.pre("save", function (next) {
  this.name = this.name.toUpperCase();
  next();
});

const Group = mongoose.model("Group", groupSchema);

export default Group;
