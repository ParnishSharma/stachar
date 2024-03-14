import mongoose from "mongoose";

const Users = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    income:{
        type:Number,
        required:true,
    },
    employment:{
        type:String,
        required:true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


export default mongoose.model("users", Users);