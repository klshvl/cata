import { Text, Image } from "react-native";

import { styles } from "./styles";
import ListCard from "../ListCard";

const TopCreatorsList = ({ item }) => {
  return (
    <ListCard style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/profile.png")}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.social}>{item.social}</Text>
      <Text style={styles.followers}>{item.followers}</Text>
    </ListCard>
  );
};

export default TopCreatorsList;
