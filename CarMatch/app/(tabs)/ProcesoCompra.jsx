import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function ProcesoCompra() {
  return (
    <View style={styles.container}>
      {/* 🔹 Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Proceso de compra</Text>
      </View>

      {/* 🔸 Contenido */}
      <View style={styles.content}>
        {/* Fila 1 */}
        <View style={styles.row}>
          <View style={styles.step}>
            <Ionicons name="eye-outline" size={40} color="#6C47FF" />
            <Text style={styles.label}>VER</Text>
          </View>

          <Text style={styles.arrow}>───</Text>

          <View style={styles.step}>
            <Ionicons name="document-text-outline" size={40} color="#6C47FF" />
            <Text style={styles.label}>INFO</Text>
          </View>

          <Text style={styles.arrow}>───</Text>

          <View style={styles.step}>
            <Ionicons name="chatbubble-ellipses-outline" size={40} color="#6C47FF" />
            <Text style={styles.label}>CHATEAR</Text>
          </View>
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <View style={styles.step}>
            <Ionicons name="calendar-outline" size={40} color="#6C47FF" />
            <Text style={styles.label}>CITA</Text>
          </View>

          <Text style={styles.arrow}>───</Text>

          <View style={styles.step}>
            <Ionicons name="checkmark-circle-outline" size={40} color="#6C47FF" />
            <Text style={styles.label}>CHECK-IN</Text>
          </View>

          <Text style={styles.arrow}>───</Text>

          <View style={styles.step}>
            <FontAwesome5 name="car-side" size={40} color="#6C47FF" />
            <Text style={styles.label}>VISITA</Text>
          </View>
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <View style={styles.step}>
            <FontAwesome5 name="money-bill-wave" size={40} color="#6C47FF" />
            <Text style={styles.label}>PAGO</Text>
          </View>

          <Text style={styles.arrow}>───</Text>

          <View style={styles.step}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/7447/7447706.png",
              }}
              style={{ width: 40, height: 40, tintColor: "#6C47FF" }}
            />
            <Text style={styles.label}>CarMatch</Text>
          </View>
        </View>
      </View>

      {/* 🔻 Barra inferior */}
      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#6C47FF",
    paddingVertical: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  step: {
    alignItems: "center",
  },
  label: {
    color: "#6C47FF",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 13,
  },
  arrow: {
    color: "#6C47FF",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 18,
  },
});
