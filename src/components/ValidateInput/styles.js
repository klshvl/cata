import { StyleSheet } from "react-native";

import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  resolved: {
    borderColor: defaultStyles.colorPallete.resolved,
  },
  error: {
    borderColor: defaultStyles.colorPallete.error,
  },
  // errorMsg: {
  //   fontSize: defaultStyles.fonts.errorMsg,
  //   color: defaultStyles.colorPallete.error,
  //   marginTop: 1,
  //   marginBottom: 5,
  // },
});
