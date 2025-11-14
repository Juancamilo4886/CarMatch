import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../assets/Styles/Styles";

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={globalStyles.inicio_container}>
      {/* 🟣 Logo central */}
      <View style={globalStyles.inicio_logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")} // 👈 tu imagen de Carmatch
          style={globalStyles.inicio_logo}
        />
        <Text style={globalStyles.inicio_textoLogo}>CarMatch</Text>
      </View>

      {/* 🔘 Botones de acción */}
      <View style={globalStyles.inicio_botonesContainer}>
        <TouchableOpacity
          style={globalStyles.inicio_botonPrimario}
          onPress={() => router.push("/login")}
        >
          <Text style={globalStyles.inicio_textoBotonPrimario}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.inicio_botonSecundario}
          onPress={() => router.push("/registro")}
        >
          <Text style={globalStyles.inicio_textoBotonSecundario}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
