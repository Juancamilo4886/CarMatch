import { Image, Text, View } from "react-native";
import { globalStyles } from "../Styles/Styles";

export default function EncabezadoLogo() {
  return (
    <View style={globalStyles.encabezadoContainer}>
      <Image
        source={require("../images/logo.png")}
        style={globalStyles.encabezadoLogo}
      />
      <Text style={globalStyles.encabezadoTexto}>Carmatch</Text>
    </View>
  );
}
