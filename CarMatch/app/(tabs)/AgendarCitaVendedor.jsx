import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BarraInferior from "../../assets/componentes/BarraInferior";

export default function AgendarCitaVendedor() {
  const router = useRouter();
  const [seleccion, setSeleccion] = useState(null);

  const diasDisponibles = [2, 3, 4, 6, 8, 9, 12, 14, 18, 20, 22, 27, 29, 31];

  const aceptarCita = () => {
    // ✅ Envía a la pantalla de confirmación
    router.push("/CitaConfirmada");
  };

  const rechazarCita = () => {
    // ❌ Regresa al chat del vendedor
    Alert.alert("Cita cancelada", "Has rechazado la cita del comprador ❌");
    router.push("/ChatComprador");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 50 }}>
        {/* 🔹 Encabezado */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#6C47FF",
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Reservar Cita
          </Text>
          <Text style={{ color: "#EAE8FF", marginTop: 3 }}>
            {"< SELECCIONA TUS DÍAS DISPONIBLES >"}
          </Text>
        </View>

        {/* 🔹 Calendario */}
        <View
          style={{
            marginTop: 15,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
            backgroundColor: "#fff",
            elevation: 2,
          }}
        >
          <Text
            style={{
              color: "#6C47FF",
              fontWeight: "bold",
              marginBottom: 5,
              fontSize: 14,
            }}
          >
            Octubre
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: 260,
            }}
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => (
              <TouchableOpacity
                key={dia}
                onPress={() => setSeleccion(dia)}
                style={{
                  width: 32,
                  height: 32,
                  margin: 3,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: diasDisponibles.includes(dia)
                    ? "#D8FAD0"
                    : "#F0F0F0",
                  borderWidth: seleccion === dia ? 2 : 1,
                  borderColor: seleccion === dia ? "#6C47FF" : "#ccc",
                }}
              >
                <Text style={{ fontSize: 13 }}>{dia}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={() => alert("🗓️ Abriendo calendario completo...")}>
            <Text style={{ color: "#6C47FF", marginTop: 10, fontSize: 12 }}>
              Modificar calendario
            </Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Oferta del comprador */}
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>
            Oferta del Comprador:
          </Text>
          <Text style={{ marginTop: 5, fontSize: 15, color: "#000" }}>
            8 de Octubre - 10:00
          </Text>
        </View>

        {/* 🔘 Botones de acción */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            width: "80%",
          }}
        >
          <TouchableOpacity
            onPress={rechazarCita}
            style={{
              borderWidth: 1,
              borderColor: "#6C47FF",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#6C47FF", fontWeight: "bold" }}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={aceptarCita}
            style={{
              backgroundColor: "#6C47FF",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Aceptar</Text>
          </TouchableOpacity>
        </View>

        {/* 🔙 Botón Regresar */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 30,
            backgroundColor: "#6C47FF",
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 50,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Regresar</Text>
        </TouchableOpacity>
      </ScrollView>

      <BarraInferior />
    </SafeAreaView>
  );
}
