import bcrypt from "bcryptjs";
import express from "express";
import Users from "../models/Users.js";

const router = express.Router();

// REGISTRO
router.post("/register", async (req, res) => {
  
  try {
    const { nombre, email, password, telefono } = req.body;

    const existe = await Users.findOne({ email });
    if (existe) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const nuevoUser = new Users({
      nombre,
      email,
      password: hashed,
      telefono
    });

    await nuevoUser.save();
    res.json({ mensaje: "Usuario registrado con éxito" });

  } catch (err) {
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ error: "Usuario no existe" });

    const valido = await bcrypt.compare(password, user.password);
    if (!valido) return res.status(400).json({ error: "Contraseña incorrecta" });

    res.json({
      mensaje: "Login exitoso",
      usuario: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        telefono: user.telefono
      }
    });

  } catch (err) {
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
