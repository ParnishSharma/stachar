import mongoose from "mongoose";

const id = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", id);