import { StyleSheet } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultStyles.colorPallete.cardWhite,
    borderColor: defaultStyles.colorPallete.cardWhite,
    borderRadius: 6,
    borderWidth: 1,
    padding: defaultStyles.screen.screenPadding,
    shadowColor: defaultStyles.colorPallete.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});
