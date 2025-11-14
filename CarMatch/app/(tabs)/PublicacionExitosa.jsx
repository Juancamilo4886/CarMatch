import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function PublicacionExitosa() {
  const router = useRouter();

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
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Publicación
        </Text>
      </View>

      {/* 🟣 Contenido principal */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../../assets/images/check.png")}
          style={{
            width: 120,
            height: 120,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
          Publicación exitosa
        </Text>

        {/* 🔘 Botón regresar */}
        <TouchableOpacity
          onPress={() => router.push("/MisCarros")}
          style={{
            backgroundColor: "#6C47FF",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Regresar
          </Text>
        </TouchableOpacity>
      </View>

      <BarraInferior />
    </SafeAreaView>
  );
}
