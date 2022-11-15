import React from "react";
import { Pressable, Text } from "react-native";

import { getStyles } from "./styles";

const CustomButton = ({ customStyle, disable, onPress, style, title }) => {
  const styles = getStyles(disable);

  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.btnContainer, styles.pressed, style]
          : [styles.btnContainer, customStyle]
      }
    >
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CustomButton);
