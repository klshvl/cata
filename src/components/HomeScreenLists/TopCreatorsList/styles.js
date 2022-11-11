import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    marginRight: 10,
    alignItems: "center",
    width: 150,
    height: 178,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#FBFBFB",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 16,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  social: {
    color: "grey",
    marginBottom: 16,
  },
  followers: {
    color: "purple",
  },
});
