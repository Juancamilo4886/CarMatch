import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function DetallesAuto() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const {
    id,
    nombre,
    precio,
    marca,
    kilometraje,
    color,
    combustible,
    transmision,
    motor,
    duenos,
    mantenimiento,
    accesorios,
    condicion,
    video,
  } = params;

  // 🖼️ Mapeo fijo de imágenes locales
  const imagenes = {
    1: require("../../assets/images/chevrolet1.png"),
    2: require("../../assets/images/chevrolet2.png"),
    3: require("../../assets/images/chevrolet3.png"),
    4: require("../../assets/images/chevrolet4.png"),
    5: require("../../assets/images/renault1.png"),
    6: require("../../assets/images/renault2.png"),
    7: require("../../assets/images/renault3.png"),
    8: require("../../assets/images/renault4.png"),
    9: require("../../assets/images/toyota1.png"),
    10: require("../../assets/images/toyota2.png"),
    11: require("../../assets/images/toyota3.png"),
    12: require("../../assets/images/toyota4.png"),
  };

  // 🧩 Imagen del auto según el ID recibido
  const imagenAuto = imagenes[id]
    ? imagenes[id]
    : { uri: "https://via.placeholder.com/300x200.png?text=Sin+imagen" };

  // 🎥 Miniatura del video
  const miniaturaVideo =
    video && video.includes("http")
      ? { uri: video }
      : {
          uri: "https://via.placeholder.com/300x200.png?text=Video+no+disponible",
        };

  // 🔗 Abrir video en navegador
  const abrirVideo = async () => {
    if (!video) return alert("No hay video disponible 😅");
    const supported = await Linking.canOpenURL(video);
    if (supported) await Linking.openURL(video);
    else alert("No se pudo abrir el enlace del video 😢");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
            {marca || "Detalles del Vehículo"}
          </Text>
        </View>

        {/* 🚗 Imagen principal */}
        <Image
          source={imagenAuto}
          style={{
            width: 230,
            height: 150,
            borderRadius: 10,
            marginTop: 15,
            resizeMode: "cover",
          }}
        />

        {/* 💰 Precio */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 10,
            color: "#000",
          }}
        >
          ${precio ? Number(precio).toLocaleString("es-CO") : "No disponible"}
        </Text>

        {/* 📋 Información */}
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Text
            style={{
              color: "#6C47FF",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            INFORMACIÓN DEL AUTOMÓVIL
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Modelo:</Text> {nombre}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Kilometraje:</Text>{" "}
            {kilometraje} km
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Color:</Text> {color}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Combustible:</Text>{" "}
            {combustible}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Transmisión:</Text>{" "}
            {transmision}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Motor:</Text> {motor}
          </Text>

          <Text
            style={{
              color: "#6C47FF",
              fontWeight: "bold",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            ESTADO Y EQUIPAMIENTO
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Dueños:</Text> {duenos}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Mantenimientos:</Text>{" "}
            {mantenimiento}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Accesorios:</Text> {accesorios}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Condición:</Text> {condicion}
          </Text>

          {/* 🎬 Video centrado */}
          <Text
            style={{
              color: "#6C47FF",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 15,
              marginBottom: 8,
            }}
          >
            DATOS VISUALES
          </Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={abrirVideo} activeOpacity={0.8}>
              <Image
                source={miniaturaVideo}
                style={{
                  width: 300,
                  height: 170,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* 💬 Botones */}
          <View
            style={{
              alignItems: "center",
              marginTop: 5,
              marginBottom: 20,
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/ChatVendedor")}
              style={{
                backgroundColor: "#6C47FF",
                borderRadius: 8,
                paddingVertical: 10,
                width: 230,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Chatear con el vendedor
              </Text>
            </TouchableOpacity>

            {/* ✅ Envío de imagen y nombre al informe mecánico */}
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/InformeMecanico",
                  params: {
                    imagen: `car_${id}`,
                    nombre: nombre || marca || "Auto seleccionado",
                  },
                })
              }
              style={{
                borderColor: "#6C47FF",
                borderWidth: 1.5,
                borderRadius: 8,
                paddingVertical: 10,
                width: 230,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>
                Informe Mecánico
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BarraInferior />
    </View>
  );
}
