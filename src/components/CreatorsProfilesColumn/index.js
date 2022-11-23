import { Image, View, Text } from "react-native";

import ListCard from "../ListCard";
import { styles } from "./styles";

const CreatorsProfilesColumn = ({ item }) => {
  return (
    <ListCard style={styles.containerColumn}>
      <Image
        source={require("../../../assets/images/profile.png")}
        style={styles.imageColumn}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.social}>{item.social}</Text>
      </View>
      <Text style={styles.followersColumn}>{item.followers} Followers</Text>
    </ListCard>
  );
};

export default CreatorsProfilesColumn;
