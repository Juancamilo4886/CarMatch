import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function ChatVendedor() {
  const router = useRouter();
  const { nombre, imagen } = useLocalSearchParams();
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([
    { texto: "¡Hola! ¿Te interesa este vehículo?", emisor: "vendedor" },
  ]);

  const enviarMensaje = () => {
    if (mensaje.trim() === "") return;
    setMensajes([...mensajes, { texto: mensaje, emisor: "usuario" }]);
    setMensaje("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Encabezado del chat */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#6C47FF",
          padding: 12,
          paddingTop: 40,
        }}
      >
        {imagen ? (
          <Image
            source={{ uri: imagen }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              marginRight: 10,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        ) : (
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              backgroundColor: "#ddd",
              marginRight: 10,
            }}
          />
        )}
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          Chat con Vendedor
        </Text>
      </View>

      {/* Área de mensajes */}
      <ScrollView
        style={{ flex: 1, padding: 10 }}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {mensajes.map((m, index) => (
          <View
            key={index}
            style={{
              alignSelf: m.emisor === "usuario" ? "flex-end" : "flex-start",
              backgroundColor:
                m.emisor === "usuario" ? "#6C47FF" : "#E6E6FA",
              borderRadius: 10,
              padding: 10,
              marginVertical: 4,
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                color: m.emisor === "usuario" ? "#fff" : "#000",
                fontSize: 14,
              }}
            >
              {m.texto}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input de mensaje */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 40,
            marginRight: 10,
          }}
          placeholder="Escribe tu mensaje..."
          value={mensaje}
          onChangeText={setMensaje}
        />
        <TouchableOpacity
          onPress={enviarMensaje}
          style={{
            backgroundColor: "#6C47FF",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Botón para agendar cita */}
      <TouchableOpacity
        onPress={() => router.push("/AgendarCita")}
        style={{
          backgroundColor: "#6C47FF",
          paddingVertical: 12,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginHorizontal: 20,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Agendar Cita</Text>
      </TouchableOpacity>

      <BarraInferior />
    </View>
  );
}
