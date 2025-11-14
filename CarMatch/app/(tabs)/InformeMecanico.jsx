import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    Image,
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function InformeMecanico() {
  const { imagen, nombre } = useLocalSearchParams();
  const [secciones, setSecciones] = useState({
    Motor: false,
    Frenos: false,
    Carrocería: false,
    Tecnomecánica: false,
    Batería: false,
  });

  // ✅ Mapeo de imágenes locales (Chevrolet, Renault y Toyota)
  const imagenesLocales = {
    car_1: require("../../assets/images/chevrolet1.png"),
    car_2: require("../../assets/images/chevrolet2.png"),
    car_3: require("../../assets/images/chevrolet3.png"),
    car_4: require("../../assets/images/chevrolet4.png"),

    car_5: require("../../assets/images/renault1.png"),
    car_6: require("../../assets/images/renault2.png"),
    car_7: require("../../assets/images/renault3.png"),
    car_8: require("../../assets/images/renault4.png"),

    car_9: require("../../assets/images/toyota1.png"),
    car_10: require("../../assets/images/toyota2.png"),
    car_11: require("../../assets/images/toyota3.png"),
    car_12: require("../../assets/images/toyota4.png"),
  };

  const imagenAuto = imagenesLocales[imagen]
    ? imagenesLocales[imagen]
    : { uri: "https://via.placeholder.com/300x200.png?text=Sin+imagen" };

  const toggleSeccion = (key) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSecciones((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const detalles = {
    Motor:
      "El motor presenta un funcionamiento estable, sin fugas visibles ni ruidos inusuales. Se recomienda cambio de aceite en 2.000 km.",
    Frenos:
      "Sistema de frenos en buen estado. Pastillas con 80% de vida útil. Líquido de frenos dentro del rango recomendado.",
    Carrocería:
      "La pintura se mantiene en buen estado con pequeños rayones superficiales. No hay señales de golpes estructurales.",
    Tecnomecánica:
      "Certificación vigente hasta agosto de 2026. Cumple con todos los parámetros de emisiones y seguridad vehicular.",
    Batería:
      "Nivel de carga óptimo. No se observan sulfataciones en los bornes. Revisión recomendada en 6 meses.",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Informe Mecánico</Text>
        <Text style={styles.subtitle}>{nombre}</Text>

        {/* 🚗 Imagen recibida desde DetallesAuto */}
        <Image source={imagenAuto} style={styles.image} />

        <View style={styles.calificacionContainer}>
          <TouchableOpacity style={styles.btnCalificacion}>
            <Text style={styles.btnText}>Calificación</Text>
          </TouchableOpacity>
          <Text style={styles.iconos}>🛠️🛠️🛠️🛠️🛠️</Text>
        </View>

        {Object.keys(secciones).map((key) => (
          <View key={key} style={styles.card}>
            <TouchableOpacity
              style={styles.cardHeader}
              onPress={() => toggleSeccion(key)}
            >
              <Text style={styles.cardIcon}>＋</Text>
              <Text style={styles.cardTitle}>{key}</Text>
            </TouchableOpacity>

            {secciones[key] && (
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{detalles[key]}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C47FF",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 15,
  },
  image: {
    width: "85%",
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 20,
  },
  calificacionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  btnCalificacion: {
    backgroundColor: "#6C47FF",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  iconos: {
    fontSize: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    marginVertical: 6,
    elevation: 3,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  cardIcon: {
    color: "#6C47FF",
    fontSize: 18,
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#333",
  },
  cardContent: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  cardText: {
    fontSize: 13,
    color: "#555",
  },
});
