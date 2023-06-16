import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required:true
  },
  lastname: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export const usersModel = mongoose.model("users", UsersSchema);