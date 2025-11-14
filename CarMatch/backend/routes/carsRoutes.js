import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

// ------------------------------
// CREAR UN AUTO
// ------------------------------
router.post("/crear", async (req, res) => {
  try {
    const { marca, modelo, anio, kilometraje, imagen, video, vendedorId } = req.body;

    if (!marca || !modelo || !anio || !kilometraje) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const nuevoCarro = new Car({
      nombre: modelo,
      marca,
      precio: 0,
      kilometraje,
      color: "No especificado",
      combustible: "No especificado",
      transmision: "No especificado",
      motor: "No especificado",
      duenos: "No especificado",
      mantenimiento: "Sin datos",
      accesorios: "Sin accesorios",
      condicion: "Sin condición",
      imagen: imagen || "https://via.placeholder.com/300x200",
      video: video || "https://example.com",
      vendedorId: vendedorId || null,
    });

    await nuevoCarro.save();

    res.json({
      mensaje: "Auto creado correctamente",
      auto: nuevoCarro,
    });
  } catch (error) {
    console.error("❌ Error al crear auto:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// ------------------------------
// LISTAR TODOS LOS AUTOS
// ------------------------------
router.get("/", async (req, res) => {
  try {
    const autos = await Car.find();
    res.json(autos);
  } catch (error) {
    console.error("❌ Error al listar autos:", error);
    res.status(500).json({ error: "Error al obtener autos" });
  }
});

export default router;
