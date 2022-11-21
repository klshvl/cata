import { StyleSheet, Platform } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: defaultStyles.fonts.large,
    fontWeight: defaultStyles.fonts.bold,
  },
  myCamaignsBtns: {
    marginRight: 5,
  },
  myCamaignsBtn: {
    color: defaultStyles.colorPallete.primary,
    fontWeight: defaultStyles.fonts.bold,
  },
  btnsContainer: {
    flexDirection: "row",
  },
  insightsBtn: {
    color: "grey",
  },
  insightsBtns: {
    borderWidth: 1,
    borderColor: defaultStyles.colorPallete.cardWhite,
    borderRadius: 6,
    marginRight: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.8,
    backgroundColor: defaultStyles.colorPallete.insightsBtns,
    borderColor: defaultStyles.colorPallete.insightsBtns,
  },
  pressedText: {
    color: defaultStyles.colorPallete.cardWhite,
  },
});
