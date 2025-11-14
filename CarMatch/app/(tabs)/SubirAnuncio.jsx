import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

import { API_URL } from "../../config";

export default function SubirAnuncio() {
  const router = useRouter();

  const [imagen, setImagen] = useState(null);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [kilometraje, setKilometraje] = useState("");

  // 📸 Seleccionar imagen
  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permiso.status !== "granted") {
      alert("Se requiere permiso para acceder a las imágenes.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen({ uri: resultado.assets[0].uri });
    }
  };

  // 🚗 Publicar auto en Mongo
  const publicarAnuncio = async () => {
    if (!marca || !modelo || !anio || !kilometraje) {
      return alert("Por favor completa todos los campos 📋");
    }

    try {
      const dataEnviar = {
        marca,
        modelo,
        anio,
        kilometraje,
        imagen: imagen ? imagen.uri : "https://via.placeholder.com/300x200",
        video: "https://example.com",
        vendedorId: null,
      };

      console.log("📤 Enviando al backend:");
      console.log(dataEnviar);
      console.log("🔗 URL:", `${API_URL}/cars/crear`);

      const response = await fetch(`${API_URL}/cars/crear`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataEnviar),
      });

      const data = await response.json();

      console.log("📥 Respuesta del backend:", data);

      if (!response.ok) {
        return alert(data.error || "Error al crear el anuncio");
      }

      alert("🚗✨ Auto publicado correctamente!");
      router.push("/PublicacionExitosa");

    } catch (error) {
      console.log("❌ ERROR AL CONECTAR:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/* Encabezado */}
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
            Subir anuncio
          </Text>
        </View>

        {/* Imagen */}
        <View style={{ marginTop: 25, alignItems: "center" }}>
          <Image
            source={imagen ?? require("../../assets/images/toyota3.png")}
            style={{
              width: 280,
              height: 170,
              borderRadius: 20,
              resizeMode: "cover",
            }}
          />

          <TouchableOpacity
            onPress={seleccionarImagen}
            style={{
              position: "absolute",
              bottom: 8,
              right: 25,
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 6,
              elevation: 4,
            }}
          >
            <Ionicons name="pencil" size={18} color="#6C47FF" />
          </TouchableOpacity>
        </View>

        {/* Campos */}
        <View style={{ width: "85%", marginTop: 25 }}>
          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Marca</Text>
          <TextInput
            placeholder="ej: KIA"
            value={marca}
            onChangeText={setMarca}
            style={styles.input}
          />

          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Modelo</Text>
          <TextInput
            placeholder="ej: Soluto"
            value={modelo}
            onChangeText={setModelo}
            style={styles.input}
          />

          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Año</Text>
          <TextInput
            placeholder="ej: 2022"
            value={anio}
            onChangeText={setAnio}
            keyboardType="numeric"
            style={styles.input}
          />

          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>
            Kilometraje
          </Text>
          <TextInput
            placeholder="ej: 6000 km"
            value={kilometraje}
            onChangeText={setKilometraje}
            keyboardType="numeric"
            style={{ ...styles.input, marginBottom: 25 }}
          />
        </View>

        {/* Botón publicar */}
        <TouchableOpacity onPress={publicarAnuncio} style={styles.botonPublicar}>
          <Text style={styles.textoBoton}>Publicar</Text>
        </TouchableOpacity>

        {/* Regresar */}
        <TouchableOpacity
          onPress={() => router.push("/MisCarros")}
          style={styles.botonRegresar}
        >
          <Text style={{ color: "#6C47FF", fontWeight: "bold", fontSize: 15 }}>
            Regresar
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BarraInferior />
    </SafeAreaView>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#6C47FF",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  botonPublicar: {
    backgroundColor: "#6C47FF",
    paddingVertical: 12,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    marginBottom: 15,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonRegresar: {
    borderColor: "#6C47FF",
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
  },
};
