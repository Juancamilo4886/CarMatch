import { useRouter } from "expo-router";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { globalStyles } from "../../assets/Styles/Styles";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function Perfil() {
  const router = useRouter();

  const campos = [
    { label: "Usuario", placeholder: "ej: felipel.p56 ......" },
    { label: "Nombre completo", placeholder: "ej: Juan Felipe Lozada Perez ......" },
    { label: "Cédula", placeholder: "ej: 10259684 ......" },
    { label: "Correo", placeholder: "ej: felipe.lozada56@gmail.com ......" },
    { label: "Celular", placeholder: "ej: 314-844-5896 ......" },
  ];

  return (
    <SafeAreaView style={globalStyles.perfil_container}>
      <ScrollView
        contentContainerStyle={globalStyles.perfil_scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* 🔵 Encabezado */}
        <View style={globalStyles.perfil_header} />

        {/* 📸 Imagen de perfil */}
        <View style={globalStyles.perfil_imagenContainer}>
          <View style={globalStyles.perfil_imagenBox}>
            <Image
              source={require("../../assets/images/perfil.png")}
              style={globalStyles.perfil_imagen}
            />
          </View>

          <TouchableOpacity style={globalStyles.perfil_botonEditar}>
            <Text style={globalStyles.perfil_iconoEditar}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* 🧾 Título */}
        <Text style={globalStyles.perfil_titulo}>Perfil</Text>

        {/* 📋 Campos */}
        <View style={globalStyles.perfil_camposContainer}>
          {campos.map((campo, index) => (
            <View key={index} style={globalStyles.perfil_campo}>
              <Text style={globalStyles.perfil_label}>{campo.label}</Text>
              <TextInput
                placeholder={campo.placeholder}
                placeholderTextColor="#888"
                style={globalStyles.perfil_input}
              />
            </View>
          ))}
        </View>

        {/* 🔘 Botón Cerrar sesión */}
        <TouchableOpacity
          style={globalStyles.perfil_botonCerrarSesion}
          onPress={() => router.push("/opciones")} // ✅ Navegación agregada
        >
          <Text style={globalStyles.perfil_textoCerrarSesion}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 🔹 Barra inferior */}
      <BarraInferior />
    </SafeAreaView>
  );
}
