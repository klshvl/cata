import { StyleSheet, Dimensions } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: defaultStyles.screen.screenPadding,
    paddingVertical: 15,
    height: "100%",
  },
  modalTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: defaultStyles.fonts.size,
    fontWeight: "bold",
    marginLeft: width / 2.9,
  },
  welcomeTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },
  welcomeText: {
    fontSize: defaultStyles.fonts.large,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  btnContainerStyle: {
    backgroundColor: defaultStyles.colorPallete.primary,
    borderRadius: 8,
  },
  btnPressedStyle: {
    opacity: 0.8,
  },
  btnTextStyle: {
    color: defaultStyles.colorPallete.white,
    paddingVertical: 10,
    textAlign: "center",
    fontFamily: defaultStyles.fonts.primary,
  },
});
