import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    precio: { type: Number, required: true },

    kilometraje: { type: String, required: true },
    color: { type: String, required: true },
    combustible: { type: String, required: true },
    transmision: { type: String, required: true },
    motor: { type: String, required: true },
    duenos: { type: String, required: true },
    mantenimiento: { type: String, required: true },
    accesorios: { type: String, required: true },
    condicion: { type: String, required: true },

    imagen: { type: String, required: true },
    video: { type: String, required: true },

    vendedorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);
export default Car;
