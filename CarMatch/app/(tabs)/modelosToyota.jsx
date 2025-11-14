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

export default function ModelosToyota() {
  const router = useRouter();

  // 📦 Datos base de autos Toyota
  const autos = [
    {
      id: 9,
      nombre: "Toyota Corolla",
      imagen: require("../../assets/images/toyota1.png"),
      rating: 4.8,
      vistas: 45,
      tipo: "Gasolina",
      anio: 2021,
      precio: 105000000,
      kilometraje: 25000,
      color: "Gris metálico",
      combustible: "Gasolina",
      transmision: "Automática",
      motor: "1.8L Híbrido",
      duenos: 1,
      mantenimiento: "Historial completo en concesionario Toyota.",
      accesorios:
        "Cámara de reversa, pantalla táctil, control crucero, frenos ABS.",
      condicion: "Excelente estado, sin choques.",
      video: "https://i.ytimg.com/vi/kw_y3n5tNCE/maxresdefault.jpg",
    },
    {
      id: 10,
      nombre: "Toyota Hilux",
      imagen: require("../../assets/images/toyota2.png"),
      rating: 4.7,
      vistas: 38,
      tipo: "Diésel",
      anio: 2020,
      precio: 175000000,
      kilometraje: 40000,
      color: "Blanco perla",
      combustible: "Diésel",
      transmision: "Manual",
      motor: "2.8L 4x4",
      duenos: 1,
      mantenimiento: "Revisiones oficiales, sin daños estructurales.",
      accesorios:
        "Aire acondicionado bizona, rines de lujo, tapicería de cuero.",
      condicion: "Impecable, uso particular.",
      video: "https://i.ytimg.com/vi/oqpNYmK_Uaw/maxresdefault.jpg",
    },
    {
      id: 11,
      nombre: "Toyota RAV4 Híbrida",
      imagen: require("../../assets/images/toyota3.png"),
      rating: 4.9,
      vistas: 31,
      tipo: "Híbrido",
      anio: 2022,
      precio: 210000000,
      kilometraje: 15000,
      color: "Negro brillante",
      combustible: "Híbrido",
      transmision: "Automática",
      motor: "2.5L Híbrido",
      duenos: 1,
      mantenimiento: "Garantía vigente, sin accidentes.",
      accesorios:
        "Control de tracción, pantalla táctil, sensores de parqueo, techo panorámico.",
      condicion: "Como nuevo.",
      video: "https://i.ytimg.com/vi/VZcfk_F3WEE/maxresdefault.jpg",
    },
    {
      id: 12,
      nombre: "Toyota Yaris",
      imagen: require("../../assets/images/toyota4.png"),
      rating: 4.5,
      vistas: 28,
      tipo: "Gasolina",
      anio: 2018,
      precio: 67000000,
      kilometraje: 50000,
      color: "Rojo vino",
      combustible: "Gasolina",
      transmision: "Manual",
      motor: "1.3L",
      duenos: 2,
      mantenimiento: "Mantenimientos periódicos y completos.",
      accesorios:
        "Aire acondicionado, vidrios eléctricos, dirección asistida.",
      condicion: "Buen estado general.",
      video: "https://i.ytimg.com/vi/5bQcxFeiPjA/maxresdefault.jpg",
    },
  ];

  // 🎛️ Estados de filtros
  const [filtroTipo, setFiltroTipo] = useState(null);
  const [filtroAnio, setFiltroAnio] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // 🔍 Lógica de filtrado
  const autosFiltrados = autos.filter((auto) => {
    const coincideBusqueda = auto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideTipo = filtroTipo ? auto.tipo === filtroTipo : true;
    const coincideAnio = filtroAnio
      ? (filtroAnio === "2000-2007" && auto.anio >= 2000 && auto.anio <= 2007) ||
        (filtroAnio === "2008-2013" && auto.anio >= 2008 && auto.anio <= 2013) ||
        (filtroAnio === "2014-2019" && auto.anio >= 2014 && auto.anio <= 2019) ||
        (filtroAnio === "2020-2025" && auto.anio >= 2020 && auto.anio <= 2025)
      : true;

    return coincideBusqueda && coincideTipo && coincideAnio;
  });

  // 🧩 Render principal
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
          backgroundColor: "#fff",
        }}
      >
        {/* 🔍 Buscador */}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 8,
              width: "85%",
              paddingHorizontal: 10,
              height: 40,
            }}
          >
            <TextInput
              placeholder="Busca una referencia ......"
              placeholderTextColor="#888"
              style={{ flex: 1, fontSize: 14 }}
              value={busqueda}
              onChangeText={setBusqueda}
            />
            <Text style={{ fontSize: 18 }}>🔍</Text>
          </View>
        </View>

        {/* 🧾 Filtros */}
        <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
          <Text style={{ fontSize: 12, color: "#333", marginBottom: 8 }}>
            FILTRAR POR : (solo oprima una opción)
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            {/* Tipos */}
            <View>
              {["Gasolina", "Diésel", "Híbrido", "Eléctrico"].map((tipo) => (
                <TouchableOpacity key={tipo} onPress={() => setFiltroTipo(tipo)}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: filtroTipo === tipo ? "#6C47FF" : "#000",
                    }}
                  >
                    {filtroTipo === tipo ? "◉" : "○"} {tipo}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Años */}
            <View>
              {["2000-2007", "2008-2013", "2014-2019", "2020-2025"].map(
                (rango) => (
                  <TouchableOpacity
                    key={rango}
                    onPress={() => setFiltroAnio(rango)}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: filtroAnio === rango ? "#6C47FF" : "#000",
                      }}
                    >
                      {filtroAnio === rango ? "◉" : "○"} {rango}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* Botón limpiar filtros */}
          {(filtroTipo || filtroAnio) && (
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                marginTop: 5,
                marginBottom: 10,
              }}
              onPress={() => {
                setFiltroTipo(null);
                setFiltroAnio(null);
              }}
            >
              <Text style={{ color: "#6C47FF", fontSize: 12 }}>
                Limpiar filtros
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* 🚗 Tarjetas */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          {autosFiltrados.length > 0 ? (
            autosFiltrados.map((auto) => (
              <TouchableOpacity
                key={auto.id}
                onPress={() =>
                  router.push({
                    pathname: "/detallesAuto",
                    params: {
                      ...auto,
                      imagen: auto.id.toString(),
                      marca: "Toyota",
                    },
                  })
                }
                style={{
                  backgroundColor: "#fff",
                  width: "42%",
                  borderRadius: 12,
                  padding: 10,
                  marginBottom: 15,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                  elevation: 3,
                  alignItems: "center",
                }}
              >
                <Image
                  source={auto.imagen}
                  style={{
                    width: "100%",
                    height: 100,
                    borderRadius: 8,
                    resizeMode: "cover",
                  }}
                />
                <Text
                  style={{
                    fontWeight: "600",
                    marginTop: 8,
                    textAlign: "center",
                    fontSize: 13,
                  }}
                >
                  {auto.nombre}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#555",
                    marginTop: 4,
                    textAlign: "center",
                  }}
                >
                  ⭐ {auto.rating} ({auto.vistas})
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                color: "#888",
                marginTop: 30,
              }}
            >
              No hay resultados 😢
            </Text>
          )}
        </View>
      </ScrollView>

      {/* 🔙 Barra inferior */}
      <BarraInferior />
    </SafeAreaView>
  );
}
