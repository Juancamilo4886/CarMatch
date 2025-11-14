import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

// 🧩 Componentes reutilizables
import BotonPrimario from "../../assets/componentes/BotonPrimario";
import EncabezadoLogo from "../../assets/componentes/EncabezadoLogo";

export default function Opciones() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* 🖼️ Logo */}
        <EncabezadoLogo />

        {/* 🏷️ Título */}
        <Text
          style={{
            color: "#6C47FF",
            fontSize: 14,
            marginTop: 15,
            marginBottom: 25,
            fontWeight: "500",
          }}
        >
          Tema de interés
        </Text>

        {/* 🔘 Botones */}
        <View
          style={{
            alignItems: "center",
            width: "100%",
            gap: 12,
          }}
        >
          <BotonPrimario
            titulo="Vender"
            onPress={() => router.push("/MisCarros")}
            style={{
              width: 180, // igual que la imagen
              paddingVertical: 12,
              borderRadius: 10,
              backgroundColor: "#6C47FF",
            }}
            textoStyle={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
            }}
          />

          <BotonPrimario
            titulo="Comprar"
            onPress={() => router.push("/gustos")}
            style={{
              width: 180,
              paddingVertical: 12,
              borderRadius: 10,
              backgroundColor: "#6C47FF",
            }}
            textoStyle={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
