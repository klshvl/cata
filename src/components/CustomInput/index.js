import { Pressable, TextInput, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { defaultStyles } from "../../config/defaultStyles";

const CustomInput = ({
  error,
  icon,
  onPress,
  secureTextEntry,
  style,
  ...otherProps
}) => {
  return (
    <>
      <View style={[styles.textInputContainer, style]}>
        {icon && (
          <Pressable onPress={onPress}>
            <MaterialCommunityIcons
              color={defaultStyles.colorPallete.primary}
              name={icon}
              size={20}
              style={styles.icon}
            />
          </Pressable>
        )}
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          style={styles.textInput}
          {...otherProps}
        />
      </View>
      {error && <Text style={styles.errorMsg}>{error.message}</Text>}
    </>
  );
};

export default CustomInput;
