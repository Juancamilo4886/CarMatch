import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BotonPrimario from "../../assets/componentes/BotonPrimario";
import EncabezadoLogo from "../../assets/componentes/EncabezadoLogo";
import { globalStyles } from "../../assets/Styles/Styles";

export default function Gustos() {
  const router = useRouter();
  const [seleccionados, setSeleccionados] = useState([]);

  const autos = [
    { id: 1, imagen: require("../../assets/images/auto1.png") },
    { id: 2, imagen: require("../../assets/images/auto2.png") },
    { id: 3, imagen: require("../../assets/images/auto3.png") },
    { id: 4, imagen: require("../../assets/images/auto4.png") },
    { id: 5, imagen: require("../../assets/images/auto5.png") },
    { id: 6, imagen: require("../../assets/images/auto6.png") },
    { id: 7, imagen: require("../../assets/images/auto7.png") },
    { id: 8, imagen: require("../../assets/images/auto8.png") },
  ];

  const toggleSeleccion = (id) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter((item) => item !== id));
    } else if (seleccionados.length < 3) {
      setSeleccionados([...seleccionados, id]);
    }
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.gustos_container}>
      <EncabezadoLogo />

      <Text style={globalStyles.gustos_titulo}>QUEREMOS CONOCERTE</Text>
      <Text style={globalStyles.gustos_subtitulo}>
        Selecciona 3 que sean de tu gusto
      </Text>

      <View style={globalStyles.gustos_grid}>
        {autos.map((auto) => (
          <TouchableOpacity
            key={auto.id}
            onPress={() => toggleSeleccion(auto.id)}
            style={[
              globalStyles.gustos_autoBox,
              seleccionados.includes(auto.id)
                ? globalStyles.gustos_autoBoxSelected
                : globalStyles.gustos_autoBoxUnselected,
            ]}
          >
            <Image source={auto.imagen} style={globalStyles.gustos_autoImage} />
          </TouchableOpacity>
        ))}
      </View>

      <BotonPrimario
        titulo="Continuemos"
        onPress={() => router.push("/catalogo")}
        style={globalStyles.gustos_botonContinuar}
      />
    </ScrollView>
  );
}
