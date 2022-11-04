import React from "react";
import { Pressable, Text } from "react-native";

import { getStyles } from "./styles";

const CustomButton = ({ disable, onPress, title }) => {
  const styles = getStyles(disable);

  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.btnContainer, styles.pressed] : styles.btnContainer
      }
    >
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CustomButton);
