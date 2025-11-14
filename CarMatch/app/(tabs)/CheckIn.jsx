import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function CheckIn() {
  const { fecha, hora, servicios } = useLocalSearchParams();
  const listaServicios = servicios ? servicios.split(",") : [];

  // 🔹 Información que contendrá el QR
  const qrData = JSON.stringify({
    fecha,
    hora,
    servicios: listaServicios,
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Check-In</Text>

        {/* QR dinámico */}
        <View style={styles.qrContainer}>
          <QRCode value={qrData} size={140} color="#000" backgroundColor="#fff" />
        </View>

        {/* Botón "He llegado" */}
        <TouchableOpacity style={styles.arrivalButton}>
          <Text style={styles.arrivalText}>He llegado</Text>
        </TouchableOpacity>

        {/* Información */}
        <Text style={styles.sectionTitle}>INFORMACIÓN DE LA CITA</Text>

        {listaServicios.map((servicio, index) => (
          <View key={index} style={styles.servicioCard}>
            <View style={styles.checkboxChecked} />
            <Text style={styles.servicioTexto}>{servicio.trim()}</Text>
          </View>
        ))}

        {/* Fecha y hora */}
        <View style={styles.fechaContainer}>
          <Text style={styles.fechaText}>{fecha}</Text>
          <Text style={styles.horaText}>{hora}</Text>
        </View>

        {/* Llamar */}
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => alert("📞 Llamando al vendedor...")}
        >
          <Text style={styles.callText}>Llamar</Text>
        </TouchableOpacity>
      </ScrollView>

      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C47FF",
    marginBottom: 15,
  },
  qrContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  arrivalButton: {
    backgroundColor: "#6C47FF",
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  arrivalText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#6C47FF",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 5,
  },
  servicioCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    width: "90%",
    elevation: 3,
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    backgroundColor: "#6C47FF",
    borderRadius: 4,
    marginRight: 10,
  },
  servicioTexto: {
    fontSize: 14,
    color: "#333",
  },
  fechaContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#6C47FF",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  fechaText: {
    color: "#6C47FF",
    fontWeight: "bold",
  },
  horaText: {
    color: "#6C47FF",
    fontSize: 13,
  },
  callButton: {
    backgroundColor: "#6C47FF",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "50%",
    alignItems: "center",
  },
  callText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
