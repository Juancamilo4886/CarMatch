import { useRouter } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function MisCarros() {
  const router = useRouter();

  // Lista temporal de autos publicados
  const misAutos = [
    {
      id: 1,
      nombre: "Renault Duster",
      imagen: require("../../assets/images/renault4.png"),
      calificacion: 4.5,
      opiniones: 24,
    },
    {
      id: 2,
      nombre: "Chevrolet Tracker",
      imagen: require("../../assets/images/chevrolet4.png"),
      calificacion: 3.8,
      opiniones: 18,
    },
    {
      id: 3,
      nombre: "Peugeot 3008",
      imagen: require("../../assets/images/toyota3.png"),
      calificacion: 4.9,
      opiniones: 31,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
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
            Mis carros
          </Text>
        </View>

        {/* 🚗 Lista de autos */}
        <View style={{ marginTop: 15, width: "90%" }}>
          {misAutos.map((auto) => (
            <View
              key={auto.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                marginBottom: 15,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                elevation: 3,
                overflow: "hidden",
              }}
            >
              <Image
                source={auto.imagen}
                style={{
                  width: "100%",
                  height: 140,
                  resizeMode: "cover",
                }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{auto.nombre}</Text>
                <Text style={{ color: "#6C47FF", marginTop: 3 }}>
                  ⭐ {auto.calificacion} ({auto.opiniones})
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* 🔘 Botones inferiores */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "95%",
            marginTop: 15,
            marginBottom: 50,
          }}
        >
          {/* 🔙 Botón Regresar */}
          <TouchableOpacity
            onPress={() => router.push("/opciones")}
            style={{
              backgroundColor: "#EAE8FF",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              minWidth: 90,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Regresar</Text>
          </TouchableOpacity>

          {/* 💬 Botón Chats */}
          <TouchableOpacity
            onPress={() => router.push("/ChatComprador")}
            style={{
              backgroundColor: "#EAE8FF",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              minWidth: 90,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Chats</Text>
          </TouchableOpacity>

          {/* ⬆️ Botón Subir anuncio */}
          <TouchableOpacity
            onPress={() => router.push("/SubirAnuncio")}
            style={{
              backgroundColor: "#6C47FF",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
              minWidth: 110,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Subir anuncio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BarraInferior />
    </SafeAreaView>
  );
}
