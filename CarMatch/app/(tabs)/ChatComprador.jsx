import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function ChatComprador() {
  const router = useRouter();

  // 📌 Estado de filtro
  const [filtro, setFiltro] = useState("todos");

  // 📦 Datos de ejemplo
  const chats = [
    {
      id: 1,
      nombre: "Carlos López",
      mensaje: "¿Aún disponible el carro?",
      tipo: "interesado",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      id: 2,
      nombre: "María Pérez",
      mensaje: "Perfecto, quiero agendar una cita.",
      tipo: "chat",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },
    {
      id: 3,
      nombre: "Javier Díaz",
      mensaje: "¿Se puede negociar el precio?",
      tipo: "interesado",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      id: 4,
      nombre: "Lucía Méndez",
      mensaje: "Ya confirmé la cita, gracias ✅",
      tipo: "chat",
      imagen:
        "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
  ];

  // 🧩 Filtrado dinámico
  const chatsFiltrados =
    filtro === "todos"
      ? chats
      : chats.filter((c) => c.tipo === filtro);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Chats de Compradores
        </Text>
      </View>

      {/* 🔘 Filtros */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
          paddingHorizontal: 15,
        }}
      >
        {["todos", "interesado", "chat"].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            onPress={() => setFiltro(tipo)}
            style={{
              backgroundColor:
                filtro === tipo ? "#6C47FF" : "#EAE8FF",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: filtro === tipo ? "#fff" : "#6C47FF",
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {tipo === "todos"
                ? "Todos"
                : tipo === "interesado"
                ? "Interesados"
                : "Chats"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 💬 Lista de chats */}
      <ScrollView
        style={{ marginTop: 15 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {chatsFiltrados.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            onPress={() =>
              router.push({
                pathname: "/ChatConversacion",
                params: {
                  nombre: chat.nombre,
                  mensaje: chat.mensaje,
                },
              })
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              marginHorizontal: 20,
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 3,
            }}
          >
            <Image
              source={{ uri: chat.imagen }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {chat.nombre}
              </Text>
              <Text
                style={{
                  color: "#555",
                  fontSize: 13,
                  marginTop: 2,
                }}
              >
                {chat.mensaje}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {chatsFiltrados.length === 0 && (
          <Text
            style={{
              textAlign: "center",
              color: "#888",
              marginTop: 20,
            }}
          >
            No hay resultados para este filtro.
          </Text>
        )}
      </ScrollView>

      <BarraInferior />
    </View>
  );
}
