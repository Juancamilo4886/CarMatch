import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../assets/Styles/Styles";

import BotonPrimario from "../../assets/componentes/BotonPrimario";
import CampoTexto from "../../assets/componentes/CampoTexto";
import EncabezadoLogo from "../../assets/componentes/EncabezadoLogo";

import { API_URL } from "../../config";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async () => {
    if (!email || !password) {
      return alert("Completa todos los campos");
    }

    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return alert(data.error || "Error al iniciar sesión");
      }

      // 🔥 GUARDAR USUARIO EN LOCAL
      await AsyncStorage.setItem("usuario", JSON.stringify(data.usuario));

      alert("Inicio de sesión exitoso 🎉");

      router.push("/opciones");

    } catch (error) {
      console.log(error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <SafeAreaView style={globalStyles.login_container}>
      <ScrollView
        contentContainerStyle={globalStyles.login_scroll}
        showsVerticalScrollIndicator={false}
      >
        <EncabezadoLogo />
        <Text style={globalStyles.login_titulo}>Inicia sesión</Text>

        <View style={globalStyles.login_camposContainer}>
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
        </View>

        <BotonPrimario
          titulo="Continuar"
          onPress={iniciarSesion} // 🔥 AHORA SÍ INICIA SESIÓN REAL
          style={globalStyles.login_botonContinuar}
        />

        <TouchableOpacity
          onPress={() => router.push("/registro")}
          style={globalStyles.login_linkContainer}
        >
          <Text style={globalStyles.login_textoLink}>
            ¿No tienes una cuenta?{" "}
            <Text style={globalStyles.login_link}>Regístrate aquí</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
