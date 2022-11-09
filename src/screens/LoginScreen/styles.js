import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
import { defaultStyles } from "../../config/defaultStyles";

export const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: defaultStyles.screen.screenPadding,
    alignItems: "center",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    marginTop: 30,
  },
  input: {
    marginBottom: 10,
  },
  image: {
    height: height * 0.35,
  },
});
