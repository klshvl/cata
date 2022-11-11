import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FBFBFB",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#FBFBFB",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  c: {
    fontWeight: "bold",
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
    marginLeft: 160,
  },
});
