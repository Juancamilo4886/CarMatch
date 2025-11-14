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

export default function ModelosRenault() {
  const router = useRouter();

  const autos = [
    {
      id: 5,
      nombre: "Renault Kwid",
      imagen: require("../../assets/images/renault1.png"),
      rating: 4.8,
      vistas: 32,
      tipo: "Gasolina",
      anio: 2021,
      precio: 60000000,
      kilometraje: 25000,
      color: "Blanco",
      combustible: "Gasolina",
      transmision: "Automática",
      motor: "1.0L SCe",
      duenos: 1,
      mantenimiento: "Revisiones al día en concesionario Renault.",
      accesorios:
        "Pantalla táctil, cámara de reversa, vidrios eléctricos, sensor de parqueo.",
      condicion: "Excelente estado, sin choques, mantenimiento reciente.",
      video: "https://i.ytimg.com/vi/SlbAV2YeJoA/maxresdefault.jpg",
    },
    {
      id: 6,
      nombre: "Renault Sandero",
      imagen: require("../../assets/images/renault2.png"),
      rating: 4.6,
      vistas: 27,
      tipo: "Gasolina",
      anio: 2019,
      precio: 75000000,
      kilometraje: 40000,
      color: "Plata",
      combustible: "Gasolina",
      transmision: "Manual",
      motor: "1.6L 8V",
      duenos: 1,
      mantenimiento: "Historial completo en talleres Renault, sin accidentes.",
      accesorios:
        "Aire acondicionado, frenos ABS, vidrios eléctricos, sensor trasero.",
      condicion: "Excelente, todo original, sin reparaciones.",
      video: "https://i.ytimg.com/vi/w5i2YiYIhlM/maxresdefault.jpg",
    },
    {
      id: 7,
      nombre: "Renault Zoe",
      imagen: require("../../assets/images/renault3.png"),
      rating: 4.9,
      vistas: 22,
      tipo: "Eléctrico",
      anio: 2023,
      precio: 130000000,
      kilometraje: 8000,
      color: "Azul eléctrico",
      combustible: "Eléctrico",
      transmision: "Automática",
      motor: "R135 100 kW",
      duenos: 1,
      mantenimiento: "Revisiones al día, batería en óptimo estado.",
      accesorios:
        "Cámara 360°, pantalla táctil, cargador rápido, luces LED automáticas.",
      condicion: "Como nuevo, cargador doméstico incluido.",
      video: "https://i.ytimg.com/vi/7uLUKpw2jng/maxresdefault.jpg",
    },
    {
      id: 8,
      nombre: "Renault Duster",
      imagen: require("../../assets/images/renault4.png"),
      rating: 4.3,
      vistas: 18,
      tipo: "Diésel",
      anio: 2017,
      precio: 95000000,
      kilometraje: 60000,
      color: "Gris metálico",
      combustible: "Diésel",
      transmision: "Automática",
      motor: "2.0L 4x4",
      duenos: 2,
      mantenimiento: "Mantenimientos en concesionario Renault.",
      accesorios:
        "Aire acondicionado bizona, cámara trasera, rines de lujo, asientos de cuero.",
      condicion: "Buen estado general, sin golpes, mantenimiento regular.",
      video: "https://i.ytimg.com/vi/2cZk4gk9QBg/maxresdefault.jpg",
    },
  ];

  const [filtroTipo, setFiltroTipo] = useState(null);
  const [filtroAnio, setFiltroAnio] = useState(null);
  const [busqueda, setBusqueda] = useState("");

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

          {(filtroTipo || filtroAnio) && (
            <TouchableOpacity
              style={{ alignSelf: "flex-end", marginTop: 5, marginBottom: 10 }}
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
          {autosFiltrados.map((auto) => (
            <TouchableOpacity
              key={auto.id}
              onPress={() =>
                router.push({
                  pathname: "/detallesAuto",
                  params: {
                    ...auto,
                    imagen: auto.id.toString(),
                    marca: "Renault",
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
          ))}
        </View>
      </ScrollView>

      <BarraInferior />
    </SafeAreaView>
  );
}
