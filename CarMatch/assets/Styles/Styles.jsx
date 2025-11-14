import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // ============================
  // 🎨 GENERALES
  // ============================
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // ============================
  // 🧩 COMPONENTES REUTILIZABLES
  // ============================
  // 🔘 Botón primario global
  botonPrimarioGlobal: {
    backgroundColor: "#6C47FF",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginVertical: 10,
  },
  textoBotonPrimarioGlobal: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  // 📝 Campo de texto con label
  campoTextoContainer: {
    width: "80%",
    marginBottom: 15,
  },
  campoTextoLabel: {
    fontSize: 13,
    color: "#6C47FF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  campoTextoInput: {
    borderWidth: 1.5,
    borderColor: "#6C47FF",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    fontSize: 14,
    color: "#333",
  },

  // 🖼️ Encabezado con logo
  encabezadoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  encabezadoLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  encabezadoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C47FF",
    marginTop: 5,
  },

  // ============================
  // 🔐 LOGIN
  // ============================
  login_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  login_scroll: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  login_titulo: {
    fontSize: 22,
    color: "#6C47FF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  login_camposContainer: {
    width: "85%",
    alignItems: "center",
    marginBottom: 30,
  },
  login_botonContinuar: {
    marginTop: 15,
  },
  login_linkContainer: {
    marginTop: 15,
  },
  login_textoLink: {
    fontSize: 14,
    color: "#333",
  },
  login_link: {
    color: "#6C47FF",
    fontWeight: "bold",
  },

  // ============================
  // 🧾 REGISTRO
  // ============================
  registro_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  registro_scroll: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  registro_titulo: {
    fontSize: 22,
    color: "#6C47FF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  registro_camposContainer: {
    width: "85%",
    alignItems: "center",
    marginBottom: 30,
  },
  registro_botonContinuar: {
    marginTop: 15,
  },
  registro_linkContainer: {
    marginTop: 10,
  },
  registro_textoLink: {
    fontSize: 14,
    color: "#333",
  },
  registro_link: {
    color: "#6C47FF",
    fontWeight: "bold",
  },

  // ============================
  // ⚙️ OPCIONES
  // ============================
  opciones_container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  opciones_scroll: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  opciones_botonesContainer: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 20,
  },
  opciones_botonPrimario: {
    backgroundColor: "#6C47FF",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  opciones_textoBotonPrimario: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  opciones_botonSecundario: {
    backgroundColor: "#EAE8FF",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  opciones_textoBotonSecundario: {
    color: "#6C47FF",
    fontWeight: "bold",
    fontSize: 16,
  },

  // ============================
  // 💜 GUSTOS
  // ============================
  gustos_container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  gustos_titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B2E83",
    marginBottom: 8,
    textAlign: "center",
  },
  gustos_subtitulo: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  gustos_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
  },
  gustos_autoBox: {
    borderWidth: 2,
    borderRadius: 12,
    margin: 8,
    padding: 5,
  },
  gustos_autoBoxSelected: {
    borderColor: "#6C47FF",
  },
  gustos_autoBoxUnselected: {
    borderColor: "#ccc",
  },
  gustos_autoImage: {
    width: 120,
    height: 90,
    borderRadius: 10,
  },
  gustos_botonContinuar: {
    marginTop: 20,
  },

  // ============================
  // 👤 PERFIL
  // ============================
  perfil_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  perfil_scroll: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 30,
  },
  perfil_header: {
    width: "100%",
    height: 60,
    backgroundColor: "#6C47FF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  perfil_imagenContainer: {
    marginTop: -30,
    alignItems: "center",
  },
  perfil_imagenBox: {
    width: 230,
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  perfil_imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  perfil_botonEditar: {
    position: "absolute",
    bottom: 8,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    elevation: 4,
  },
  perfil_titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  perfil_camposContainer: {
    width: "85%",
    marginTop: 20,
  },
  perfil_label: {
    fontSize: 12,
    color: "#6C47FF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  perfil_input: {
    borderWidth: 1.5,
    borderColor: "#6C47FF",
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 13,
    color: "#333",
  },
  perfil_botonCerrarSesion: {
    backgroundColor: "#EAE8FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  perfil_textoCerrarSesion: {
    color: "#6C47FF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

    // ============================
  // 🏁 INICIO (Pantalla de bienvenida con logo)
  // ============================
  inicio_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  inicio_logoContainer: {
    alignItems: "center",
    marginBottom: 80,
  },

  inicio_logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },

  inicio_textoLogo: {
    color: "#6C47FF",
    fontSize: 20,
    fontWeight: "bold",
  },

  inicio_botonesContainer: {
    width: "80%",
    alignItems: "center",
    gap: 15,
  },

  inicio_botonPrimario: {
    backgroundColor: "#6C47FF",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  inicio_textoBotonPrimario: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  inicio_botonSecundario: {
    backgroundColor: "#EAE8FF",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  inicio_textoBotonSecundario: {
    color: "#6C47FF",
    fontWeight: "bold",
    fontSize: 16,
  },

  // ============================
// 📦 CATÁLOGO
// ============================

catalogo_container: {
  flex: 1,
  backgroundColor: "#fff",
},

catalogo_scrollContent: {
  flexGrow: 1,
  alignItems: "center",
  backgroundColor: "#fff",
  paddingBottom: 20,
},

// 🔍 Buscador
catalogo_searchContainer: {
  width: "100%",
  backgroundColor: "#6C47FF",
  paddingVertical: 15,
  alignItems: "center",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
},

catalogo_searchBox: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 8,
  width: "85%",
  paddingHorizontal: 10,
  height: 40,
},

catalogo_searchInput: {
  flex: 1,
  fontSize: 14,
},

catalogo_searchIcon: {
  fontSize: 18,
},

// 🎚️ Filtro de año
catalogo_filterContainer: {
  width: "90%",
  alignSelf: "center",
  marginTop: 10,
  marginBottom: 10,
},
catalogo_filterLabel: {
  textAlign: "center",
  fontSize: 14,
  color: "#333",
  marginBottom: 5,
},
catalogo_slider: {
  width: "100%",
  accentColor: "#6C47FF",
},


// 🏷️ Título
catalogo_title: {
  color: "#6C47FF",
  fontWeight: "bold",
  marginTop: 25,
  marginBottom: 10,
  fontSize: 16,
  textAlign: "center",
  letterSpacing: 1,
},

// 🚗 Tarjetas
catalogo_card: {
  backgroundColor: "#fff",
  width: "85%",
  borderRadius: 12,
  padding: 15,
  marginVertical: 10,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},

catalogo_cardHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 5,
},

catalogo_cardBrand: {
  fontWeight: "bold",
  fontSize: 16,
  color: "#000",
},

catalogo_cardModels: {
  color: "#444",
  fontWeight: "600",
  fontSize: 13,
  marginTop: 3,
},

catalogo_cardRating: {
  color: "#777",
  marginTop: 4,
  fontSize: 12,
},

catalogo_brandLogo: {
  width: 55,
  height: 55,
  resizeMode: "contain",
},

// 🔗 Botón “Ver”
catalogo_viewButton: {
  backgroundColor: "#6C47FF",
  alignSelf: "center",
  borderRadius: 8,
  paddingVertical: 8,
  paddingHorizontal: 35,
  marginTop: 12,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 3,
  elevation: 3,
},

catalogo_viewButtonText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 14,
  textAlign: "center",
},

// 🔙 Botón “Regresar”
catalogo_backButton: {
  backgroundColor: "#6C47FF",
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 40,
  marginTop: 25,
  marginBottom: 25,
  alignSelf: "center",
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 4,
},

catalogo_backButtonText: {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center",
},

  // ============================
// 📘 DETALLES AUTO
// ============================
detalle_titulo: {
  fontSize: 18,
  fontWeight: "600",
  marginTop: 15,
  color: "#000",
},

detalle_precio: {
  fontSize: 16,
  color: "#000",
  fontWeight: "500",
  marginVertical: 8,
},

detalle_subtitulo: {
  fontSize: 12,
  color: "#6C47FF",
  marginTop: 10,
  fontWeight: "600",
  textAlign: "center",
},

detalle_contenedorTexto: {
  width: "85%",
  marginTop: 5,
},

detalle_texto: {
  fontSize: 11,
  color: "#333",
  marginBottom: 2,
  lineHeight: 16,
},

detalle_botonChat: {
  backgroundColor: "#6C47FF",
  borderRadius: 10,
  paddingVertical: 10,
  width: "70%",
  marginTop: 20,
  alignItems: "center",
},

detalle_botonChatTexto: {
  color: "#fff",
  fontSize: 13,
  fontWeight: "600",
},

detalle_botonInforme: {
  borderColor: "#6C47FF",
  borderWidth: 1,
  borderRadius: 10,
  paddingVertical: 10,
  width: "70%",
  marginTop: 10,
  alignItems: "center",
},

detalle_botonInformeTexto: {
  color: "#6C47FF",
  fontSize: 13,
  fontWeight: "600",
},




});

