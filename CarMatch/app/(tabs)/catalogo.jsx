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
import BarraInferior from "../../assets/componentes/BarraInferior";
import { globalStyles } from "../../assets/Styles/Styles"; // 🔹 Mantiene tu formato de importación

export default function Catalogo() {
  const router = useRouter();

  const marcas = [
    {
      id: 1,
      nombre: "Toyota",
      modelos: 20,
      rating: 5.0,
      vistas: "7,210",
      logo: require("../../assets/images/toyota.png"),
    },
    {
      id: 2,
      nombre: "Renault",
      modelos: 15,
      rating: 4.0,
      vistas: "10,210",
      logo: require("../../assets/images/renault.png"),
    },
    {
      id: 3,
      nombre: "Chevrolet",
      modelos: 35,
      rating: 3.9,
      vistas: "5,769",
      logo: require("../../assets/images/chevrolet.png"),
    },
  ];

  return (
    <SafeAreaView style={globalStyles.catalogo_container}>
      <ScrollView
        contentContainerStyle={globalStyles.catalogo_scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 🔍 Buscador */}
        <View style={globalStyles.catalogo_searchContainer}>
          <View style={globalStyles.catalogo_searchBox}>
            <TextInput
              placeholder="Buscar Marca Auto......"
              placeholderTextColor="#888"
              style={globalStyles.catalogo_searchInput}
            />
            <Text style={globalStyles.catalogo_searchIcon}>🔍</Text>
          </View>
        </View>

        {/* 🏷️ Título */}
        <Text style={globalStyles.catalogo_title}>CATÁLOGO</Text>

        {/* 🚗 Tarjetas */}
        {marcas.map((marca) => (
          <View key={marca.id} style={globalStyles.catalogo_card}>
            <View style={globalStyles.catalogo_cardHeader}>
              <View>
                <Text style={globalStyles.catalogo_cardBrand}>
                  {marca.nombre}
                </Text>
                <Text style={globalStyles.catalogo_cardModels}>
                  {marca.modelos} Modelos
                </Text>
                <Text style={globalStyles.catalogo_cardRating}>
                  ⭐ {marca.rating} ({marca.vistas}) visualizaciones de los
                  modelos
                </Text>
              </View>

              <Image source={marca.logo} style={globalStyles.catalogo_brandLogo} />
            </View>

            {/* 🔗 Botón “Ver” */}
            <TouchableOpacity
              style={globalStyles.catalogo_viewButton}
              onPress={() => {
                if (marca.nombre === "Renault") {
                  router.push("/modelosRenault");
                } else if (marca.nombre === "Toyota") {
                  router.push("/modelosToyota");
                } else if (marca.nombre === "Chevrolet") {
                  router.push("/modelosChevrolet");
                }
              }}
            >
              <Text style={globalStyles.catalogo_viewButtonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* 🔙 Botón Regresar */}
        <TouchableOpacity
          style={globalStyles.catalogo_backButton}
          onPress={() => router.push("/gustos")}
        >
          <Text style={globalStyles.catalogo_backButtonText}>Regresar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 🟣 Barra inferior */}
      <BarraInferior />
    </SafeAreaView>
  );
}
