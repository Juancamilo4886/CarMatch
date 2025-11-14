import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function AgendarCita() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const diasNoDisponibles = [1, 3, 5, 7, 11, 14, 18, 21, 24, 28];
  const horas = ["9:30 am", "11:00 am", "2:00 pm"];
  const servicios = [
    "Chequeo Rápido",
    "Inspección Completa",
    "Prueba de Manejo",
  ];

  const seleccionarDia = (dia) => {
    if (diasNoDisponibles.includes(dia)) {
      Alert.alert("Día no disponible", "Por favor selecciona otro día 📅");
      setSelectedDay(null);
      setSelectedHour(null);
    } else {
      setSelectedDay(dia);
      setSelectedHour(null);
    }
  };

  const toggleServicio = (servicio) => {
    if (selectedServices.includes(servicio)) {
      setSelectedServices(selectedServices.filter((s) => s !== servicio));
    } else {
      setSelectedServices([...selectedServices, servicio]);
    }
  };

  const continuar = () => {
    if (!selectedDay || !selectedHour || selectedServices.length === 0) {
      Alert.alert("Campos incompletos", "Completa todos los campos antes de continuar 📋");
      return;
    }

    // Formateamos la fecha seleccionada
    const fecha = `${selectedDay} de octubre de 2025`;

    // Navegación a la pantalla CheckIn con los parámetros
    router.push({
      pathname: "/CheckIn",
      params: {
        fecha,
        hora: selectedHour,
        servicios: JSON.stringify(selectedServices),
      },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Reservar Cita</Text>
        <Text style={styles.subtitle}>Primero selecciona el día</Text>

        {/* Calendario */}
        <View style={styles.calendar}>
          <Text style={styles.month}>Octubre</Text>
          <View style={styles.weekdays}>
            {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => (
              <Text key={d} style={styles.weekday}>{d}</Text>
            ))}
          </View>

          <View style={styles.daysContainer}>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => {
              const isDisabled = diasNoDisponibles.includes(dia);
              const isSelected = selectedDay === dia;

              return (
                <TouchableOpacity
                  key={dia}
                  style={[
                    styles.day,
                    isDisabled && styles.dayDisabled,
                    isSelected && styles.daySelected,
                  ]}
                  onPress={() => seleccionarDia(dia)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isDisabled && styles.dayTextDisabled,
                      isSelected && styles.dayTextSelected,
                    ]}
                  >
                    {dia}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Horas disponibles */}
        {selectedDay && (
          <View style={styles.hoursContainer}>
            {horas.map((hora) => (
              <TouchableOpacity
                key={hora}
                style={[
                  styles.hourButton,
                  selectedHour === hora && styles.hourSelected,
                ]}
                onPress={() => setSelectedHour(hora)}
              >
                <Text
                  style={[
                    styles.hourText,
                    selectedHour === hora && styles.hourTextSelected,
                  ]}
                >
                  {hora}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Servicios */}
        {selectedDay && (
          <View style={styles.servicesContainer}>
            {servicios.map((servicio) => (
              <TouchableOpacity
                key={servicio}
                style={styles.servicio}
                onPress={() => toggleServicio(servicio)}
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedServices.includes(servicio) &&
                      styles.checkboxChecked,
                  ]}
                />
                <Text style={styles.servicioTexto}>{servicio}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Botón continuar */}
        <TouchableOpacity style={styles.continuarBtn} onPress={continuar}>
          <Text style={styles.continuarText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>

      <BarraInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C47FF",
    marginBottom: 5,
  },
  subtitle: {
    color: "#6C47FF",
    fontSize: 13,
    marginBottom: 10,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 3,
  },
  month: {
    color: "#6C47FF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  weekdays: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  weekday: { color: "#555", fontSize: 12, width: 25, textAlign: "center" },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },
  day: {
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dayDisabled: { backgroundColor: "#f4baba" },
  daySelected: { backgroundColor: "#6C47FF" },
  dayText: { color: "#000", fontSize: 12 },
  dayTextDisabled: { color: "#fff" },
  dayTextSelected: { color: "#fff", fontWeight: "bold" },
  hoursContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginVertical: 15,
  },
  hourButton: {
    borderWidth: 1,
    borderColor: "#6C47FF",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  hourSelected: { backgroundColor: "#6C47FF" },
  hourText: { color: "#6C47FF" },
  hourTextSelected: { color: "#fff" },
  servicesContainer: {
    width: "90%",
    marginTop: 10,
  },
  servicio: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  servicioTexto: {
    color: "#333",
    marginLeft: 10,
    fontSize: 14,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: "#6C47FF",
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: "#6C47FF",
  },
  continuarBtn: {
    backgroundColor: "#6C47FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
  },
  continuarText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
