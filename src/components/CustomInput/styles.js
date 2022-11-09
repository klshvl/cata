import { StyleSheet } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: defaultStyles.colorPallete.primary,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: defaultStyles.fonts.size,
    fontFamily: defaultStyles.fonts.primary,
    width: "90%",
  },
  errorMsg: {
    fontSize: defaultStyles.fonts.errorMsg,
    color: defaultStyles.colorPallete.error,
    marginBottom: 5,
  },
});
