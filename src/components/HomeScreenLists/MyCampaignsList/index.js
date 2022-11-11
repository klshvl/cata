import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const MyCampaignsList = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.c}>{item.c}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/profile.png")}
      />
      <View style={styles.stats}>
        <View style={styles.statsLeft}>
          <Text style={styles.numbers}>{item.creators}</Text>
          <Text style={styles.bottomText}>Creators</Text>
        </View>
        <View>
          <Text style={styles.numbers}>{item.reach}</Text>
          <Text style={styles.bottomText}>Total reach</Text>
        </View>
        <View style={styles.icon}>
          <Ionicons name="arrow-forward-outline" size={24} color="purple" />
        </View>
      </View>
    </View>
  );
};

export default MyCampaignsList;
