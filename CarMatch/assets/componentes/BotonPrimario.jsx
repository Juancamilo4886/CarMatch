import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../Styles/Styles";

export default function BotonPrimario({ titulo, onPress, style }) {
  return (
    <TouchableOpacity
      style={[globalStyles.botonPrimarioGlobal, style]}
      onPress={onPress}
    >
      <Text style={globalStyles.textoBotonPrimarioGlobal}>{titulo}</Text>
    </TouchableOpacity>
  );
}
