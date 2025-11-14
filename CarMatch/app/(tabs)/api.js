import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // tu backend
});

// Crear usuario
export const crearUsuario = (data) => API.post("/usuarios", data);

// Obtener usuarios
export const obtenerUsuarios = () => API.get("/usuarios");

// Crear auto
export const crearAuto = (data) => API.post("/autos", data);

// Obtener autos
export const obtenerAutos = () => API.get("/autos");
