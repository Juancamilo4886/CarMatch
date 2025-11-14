import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../assets/Styles/Styles";

import BotonPrimario from "../../assets/componentes/BotonPrimario";
import CampoTexto from "../../assets/componentes/CampoTexto";
import EncabezadoLogo from "../../assets/componentes/EncabezadoLogo";

// 👇 CORRECCIÓN IMPORTANTE (agregar .js)
import { API_URL } from "../../config.js";

export default function Registro() {
  const router = useRouter();

  // 📝 Estados
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  // 🔗 Registrar usuario en backend
  const registrarUsuario = async () => {
    if (!nombre || !email || !password || !confirmar)
      return alert("Por favor completa todos los campos");

    if (password !== confirmar)
      return alert("Las contraseñas no coinciden");

    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          password,
          telefono: "Sin teléfono"
        }),
      });

      const data = await response.json();

      if (!response.ok) return alert(data.error || "Hubo un error");

      alert("Registro exitoso 🎉");
      router.push("/login");

    } catch (error) {
      console.log(error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <SafeAreaView style={globalStyles.registro_container}>
      <ScrollView
        contentContainerStyle={globalStyles.registro_scroll}
        showsVerticalScrollIndicator={false}
      >
        <EncabezadoLogo />
        <Text style={globalStyles.registro_titulo}>Crear cuenta</Text>

        <View style={globalStyles.registro_camposContainer}>
          <CampoTexto
            label="Nombre completo"
            placeholder="ej: Juan Pérez"
            value={nombre}
            onChangeText={setNombre}
          />

          <CampoTexto
            label="Correo electrónico"
            placeholder="ej: usuario@email.com"
            value={email}
            onChangeText={setEmail}
          />

          <CampoTexto
            label="Contraseña"
            placeholder="********"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <CampoTexto
            label="Confirmar contraseña"
            placeholder="********"
            secureTextEntry
            value={confirmar}
            onChangeText={setConfirmar}
          />
        </View>

        <BotonPrimario
          titulo="Continuar"
          onPress={registrarUsuario}
          style={globalStyles.registro_botonContinuar}
        />

        <TouchableOpacity
          onPress={() => router.push("/login")}
          style={globalStyles.registro_linkContainer}
        >
          <Text style={globalStyles.registro_textoLink}>
            ¿Ya tienes cuenta?{" "}
            <Text style={globalStyles.registro_link}>Inicia sesión</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
