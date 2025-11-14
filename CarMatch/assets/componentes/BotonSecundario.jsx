import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../Styles/Styles";

export default function BotonSecundario({ titulo, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.botonSecundario} onPress={onPress}>
      <Text style={globalStyles.textoBotonSecundario}>{titulo}</Text>
    </TouchableOpacity>
  );
}
