import { StyleSheet } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  imgContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 33,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: defaultStyles.colorPallete.cardWhite,
  },
  otherImgs: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: defaultStyles.fonts.bold,
  },
});
