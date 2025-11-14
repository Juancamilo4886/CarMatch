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

export default function ModelosChevrolet() {
  const router = useRouter();

  // 📦 Datos base de autos Chevrolet
  const autos = [
    {
      id: 1,
      nombre: "Chevrolet Spark GT",
      imagen: require("../../assets/images/chevrolet1.png"),
      rating: 4.8,
      vistas: 42,
      tipo: "Gasolina",
      anio: 2019,
      precio: 32000000,
      kilometraje: 42000,
      color: "Negro brillante",
      combustible: "Gasolina",
      transmision: "Manual",
      motor: "1.2L",
      duenos: 2,
      mantenimiento: "Revisiones al día, mantenimiento en concesionario oficial.",
      accesorios: "Bluetooth, pantalla táctil, aire acondicionado.",
      condicion: "Buen estado general, sin fallas mecánicas ni estéticas.",
      video: "https://i.ytimg.com/vi/1ZSL4F5O5O_w/maxresdefault.jpg",
    },
    {
      id: 2,
      nombre: "Chevrolet Tracker",
      imagen: require("../../assets/images/chevrolet2.png"),
      rating: 4.6,
      vistas: 35,
      tipo: "Gasolina",
      anio: 2022,
      precio: 85000000,
      kilometraje: 15000,
      color: "Rojo cereza",
      combustible: "Gasolina",
      transmision: "Automática",
      motor: "1.2L Turbo",
      duenos: 1,
      mantenimiento: "Mantenimientos recientes, sin accidentes.",
      accesorios:
        "Control crucero, cámara de reversa, vidrios eléctricos, sensor de parqueo.",
      condicion: "Impecable, uso particular.",
      video: "https://i.ytimg.com/vi/kk6TmRrA3hY/maxresdefault.jpg",
    },
    {
      id: 3,
      nombre: "Chevrolet Bolt EV",
      imagen: require("../../assets/images/chevrolet3.png"),
      rating: 4.9,
      vistas: 27,
      tipo: "Eléctrico",
      anio: 2023,
      precio: 130000000,
      kilometraje: 5000,
      color: "Azul metálico",
      combustible: "Eléctrico",
      transmision: "Automática",
      motor: "150 kW",
      duenos: 1,
      mantenimiento: "Nuevo, garantía de fábrica vigente.",
      accesorios:
        "Cámara 360°, control por voz, pantalla táctil, cargador rápido incluido.",
      condicion: "Nuevo, sin uso previo.",
      video: "https://i.ytimg.com/vi/lmFtGzvZ_9w/maxresdefault.jpg",
    },
    {
      id: 4,
      nombre: "Chevrolet Onix Turbo",
      imagen: require("../../assets/images/chevrolet4.png"),
      rating: 4.4,
      vistas: 19,
      tipo: "Gasolina",
      anio: 2021,
      precio: 95000000,
      kilometraje: 22000,
      color: "Gris oscuro",
      combustible: "Gasolina",
      transmision: "Automática",
      motor: "1.0L Turbo",
      duenos: 1,
      mantenimiento: "Mantenimiento oficial Chevrolet, sin choques.",
      accesorios:
        "Pantalla táctil, Apple CarPlay, frenos ABS, aire acondicionado.",
      condicion: "Excelente, con garantía vigente.",
      video: "https://i.ytimg.com/vi/qR6v3QdIkps/maxresdefault.jpg",
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
              {["Gasolina", "Diésel", "Eléctrico"].map((tipo) => (
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
                      marca: "Chevrolet",
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
