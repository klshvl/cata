import { Controller } from "react-hook-form";
import { Text } from "react-native";

import CustomInput from "../CustomInput";
import { styles } from "./styles";

const ValidateInput = ({
  control,
  icon,
  name,
  onPress,
  placeholder,
  secureTextEntry,
  style,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <CustomInput
              icon={icon}
              onChangeText={onChange}
              onPress={onPress}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              style={[style, value && styles.resolved, error && styles.error]}
              value={value}
              error={error}
            />
            {/* {error && <Text style={styles.errorMsg}>{error.message}</Text>} */}
          </>
        )}
      />
    </>
  );
};

export default ValidateInput;
