import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function BarraInferior() {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#6C47FF",
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      {/* 🔙 Botón de regresar */}
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* 📄 Nuevo botón del proceso */}
      <TouchableOpacity onPress={() => router.push("/ProcesoCompra")}>
        <Ionicons name="document-text-outline" size={26} color="#fff" />
      </TouchableOpacity>

      {/* 👤 Perfil */}
      <TouchableOpacity onPress={() => router.push("/perfil")}>
        <Ionicons name="person-outline" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
