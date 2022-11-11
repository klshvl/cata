import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const InsightsList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/profile.png")}
      />
      <Text style={styles.stats}>{item.stats}</Text>
      <Text style={styles.c}>{item.c}</Text>
    </View>
  );
};

export default InsightsList;
