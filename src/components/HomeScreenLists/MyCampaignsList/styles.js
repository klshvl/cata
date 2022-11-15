import { StyleSheet } from "react-native";

import { defaultStyles } from "../../../config/defaultStyles";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  c: {
    fontWeight: defaultStyles.fonts.bold,
    marginBottom: 2,
  },
  time: {
    color: "grey",
    marginBottom: 24,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 33,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsLeft: {
    marginRight: 33,
  },
  numbers: {
    marginBottom: 2,
    fontWeight: "600",
  },
  bottomText: {
    color: "grey",
  },
  icon: {
    marginLeft: "43%",
  },
});
