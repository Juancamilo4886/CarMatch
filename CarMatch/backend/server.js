import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import carsRoutes from "./routes/carsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// -------------------------
// CONEXIÓN A MONGODB
// -------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar Mongo:", err));

// -------------------------
// RUTAS
// -------------------------
app.use("/users", userRoutes);
app.use("/cars", carsRoutes);

// -------------------------
// SERVIDOR
// -------------------------
const PORT = process.env.PORT || 4000;

// ESTE CAMBIO ES LO QUE PERMITE QUE EL CELULAR SE CONECTE 👇
app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Servidor backend corriendo");
  console.log(`🌐 Celular puede entrar desde: http://192.168.20.2:${PORT}`);
});
