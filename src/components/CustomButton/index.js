import React from "react";
import { Pressable, Text } from "react-native";

import { getStyles } from "./styles";

const CustomButton = ({
  btnContainerStyle,
  btnPressedStyle,
  btnTextStyle,
  disable,
  onPress,
  title,
}) => {
  const styles = getStyles(disable);

  return (
    // <Pressable
    //   disabled={disable}
    //   onPress={onPress}
    //   style={
    //     ({ pressed }) =>
    //       pressed
    //         ? [styles.btnContainer, styles.pressed, style] //btnPressedStyle
    //         : [styles.btnContainer, customStyle] //btnContainerStyle
    //   } //btnTextStyle
    // >
    //   <Text style={styles.button}>{title}</Text>
    // </Pressable>
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [btnContainerStyle, btnPressedStyle]
          : [btnContainerStyle, styles.disable]
      }
    >
      <Text style={btnTextStyle}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CustomButton);
