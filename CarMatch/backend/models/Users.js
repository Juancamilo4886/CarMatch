import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true, // guarda fecha de creación y actualización
  }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
