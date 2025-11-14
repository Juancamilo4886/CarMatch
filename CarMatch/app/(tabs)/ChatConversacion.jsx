import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function ChatConversacion() {
  const router = useRouter();
  const { nombre = "Usuario", mensaje = "interesado en el vehículo" } = useLocalSearchParams();

  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const chatKey = `chat_${nombre}`; // clave única por usuario

  useEffect(() => {
    const cargarMensajes = async () => {
      try {
        const guardados = await AsyncStorage.getItem(chatKey);
        if (guardados) setMensajes(JSON.parse(guardados));
        else {
          setMensajes([
            { de: "vendedor", texto: "¡Hola! 👋 Vi que te interesa el carro." },
            { de: "comprador", texto: "Sí, ¿sigue disponible?" },
            { de: "vendedor", texto: "Claro, está disponible y en excelente estado ✅" },
          ]);
        }
      } catch (error) {
        console.log("Error cargando mensajes:", error);
      }
    };
    cargarMensajes();
  }, []);

  const guardarMensajes = async (lista) => {
    try {
      await AsyncStorage.setItem(chatKey, JSON.stringify(lista));
    } catch (error) {
      console.log("Error guardando chat:", error);
    }
  };

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() === "") return;
    const actualizado = [...mensajes, { de: "comprador", texto: nuevoMensaje }];
    setMensajes(actualizado);
    guardarMensajes(actualizado);
    setNuevoMensaje("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* 🔹 Encabezado */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#6C47FF",
          paddingVertical: 15,
          alignItems: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{nombre}</Text>
        <Text style={{ color: "#EAE8FF", fontSize: 13 }}>{mensaje}</Text>
      </View>

      {/* 💬 Mensajes */}
      <ScrollView
        style={{ flex: 1, padding: 15 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {mensajes.map((msg, index) => (
          <View
            key={index}
            style={{
              alignSelf: msg.de === "comprador" ? "flex-end" : "flex-start",
              backgroundColor: msg.de === "comprador" ? "#6C47FF" : "#EAE8FF",
              borderRadius: 15,
              marginBottom: 10,
              padding: 10,
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                color: msg.de === "comprador" ? "#fff" : "#000",
                fontSize: 14,
              }}
            >
              {msg.texto}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* 📨 Campo de texto */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#EAE8FF",
        }}
      >
        <TextInput
          placeholder="Escribe un mensaje..."
          value={nuevoMensaje}
          onChangeText={setNuevoMensaje}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#6C47FF",
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
        />
        <TouchableOpacity
          onPress={enviarMensaje}
          style={{
            backgroundColor: "#6C47FF",
            padding: 10,
            borderRadius: 20,
            marginLeft: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* 🔘 Botones inferiores */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        {/* 🔙 Botón regresar */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "#EAE8FF",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Regresar</Text>
        </TouchableOpacity>

        {/* 🕒 Añadir horario -> AgendarCitaVendedor */}
        <TouchableOpacity
          onPress={() => router.push("/AgendarCitaVendedor")} // 🔹 conexión actualizada
          style={{
            backgroundColor: "#6C47FF",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Añadir Horario</Text>
        </TouchableOpacity>
      </View>

      <BarraInferior />
    </SafeAreaView>
  );
}
