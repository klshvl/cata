import { StyleSheet } from "react-native";

// import { defaultStyles } from "../../config/defaultStyles";

export const getStyles = (disable) => {
  return StyleSheet.create({
    // btnContainer: {
    //   backgroundColor: defaultStyles.colorPallete.primary,
    //   opacity: disable ? 0.5 : 1,
    //   borderRadius: 8,
    // },
    // button: {
    //   color: defaultStyles.colorPallete.white,
    //   paddingVertical: 10,
    //   textAlign: "center",
    //   fontFamily: defaultStyles.fonts.primary,
    // },
    disable: {
      opacity: disable ? 0.5 : 1,
    },
  });
};
