import { StyleSheet } from "react-native";

import { defaultStyles } from "../../../config/defaultStyles";

export const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 132,
    height: 160,
    paddingHorizontal: defaultStyles.screen.screenPadding,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 16,
  },
  stats: {
    fontSize: defaultStyles.fonts.large,
    fontWeight: defaultStyles.fonts.bold,
    marginBottom: 15,
  },
  c: {
    color: "grey",
  },
});
