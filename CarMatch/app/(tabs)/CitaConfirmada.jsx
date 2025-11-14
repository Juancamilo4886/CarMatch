import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function CitaConfirmada() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* 🔹 Encabezado fijo arriba */}
      <View
        style={{
          backgroundColor: "#6C47FF",
          width: "100%",
          paddingVertical: 15,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Cita Confirmada
        </Text>
      </View>

      {/* 🔹 Contenido centrado (sin hueco arriba) */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
          }}
          style={{ width: 100, height: 100 }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#000",
            marginTop: 25,
            textAlign: "center",
          }}
        >
          ¡Cita agendada con éxito!
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/ChatComprador")}
          style={{
            backgroundColor: "#6C47FF",
            paddingVertical: 10,
            paddingHorizontal: 35,
            borderRadius: 10,
            marginTop: 25,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Regresar</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Barra inferior al fondo */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <BarraInferior />
      </View>
    </SafeAreaView>
  );
}
