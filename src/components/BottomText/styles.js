import { StyleSheet } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  bottomTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  textR: {
    marginLeft: 5,
    fontFamily: defaultStyles.fonts.primary,
  },
  textL: {
    color: defaultStyles.colorPallete.medium,
    fontFamily: defaultStyles.fonts.primary,
  },
});
