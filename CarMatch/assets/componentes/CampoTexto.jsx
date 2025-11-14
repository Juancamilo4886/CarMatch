import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../Styles/Styles";

export default function CampoTexto({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}) {
  return (
    <View style={globalStyles.campoTextoContainer}>
      <Text style={globalStyles.campoTextoLabel}>{label}</Text>
      <TextInput
        style={globalStyles.campoTextoInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
