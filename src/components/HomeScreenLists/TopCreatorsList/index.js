import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const TopCreatorsList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/profile.png")}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.social}>{item.social}</Text>
      <Text style={styles.followers}>{item.followers}</Text>
    </View>
  );
};

export default TopCreatorsList;
