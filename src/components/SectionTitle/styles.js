import { StyleSheet, Platform } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: defaultStyles.fonts.large,
      fontWeight: defaultStyles.fonts.bold,
    },
    myCamaignsBtns: {
      marginLeft: "43%",
    },
    myCamaignsBtn: {
      color: defaultStyles.colorPallete.primary,
      fontWeight: defaultStyles.fonts.bold,
    },
    btnsContainer: {
      flexDirection: "row",
      marginLeft: Platform.OS === "ios" ? "20%" : "15%",
    },
    insightsBtn: {
      color: "grey",
    },
    insightsBtns: {
      marginRight: "2%",
      backgroundColor: defaultStyles.colorPallete.cardWhite,
      borderWidth: 1,
      borderColor: defaultStyles.colorPallete.cardWhite,
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    pressed: {
      opacity: 0.8,
      backgroundColor: defaultStyles.colorPallete.insightsBtns,
      borderColor: defaultStyles.colorPallete.insightsBtns,
      textDecorationColor: "white",
    },
  });
};
