import { Image, View, Text } from "react-native";

import ListCard from "../ListCard";
import { styles } from "./styles";

const CreatorsProfilesList = ({ item }) => {
  return (
    <ListCard style={styles.containerList}>
      <Image
        source={require("../../../assets/images/profile.png")}
        style={styles.imageList}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.social}>{item.social}</Text>
      </View>
      <Text style={styles.followersList}>
        {item.followers} {"\n"} Followers
      </Text>
    </ListCard>
  );
};

export default CreatorsProfilesList;
