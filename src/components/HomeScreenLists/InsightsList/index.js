import { Text, Image } from "react-native";

import { styles } from "./styles";
import ListCard from "../ListCard";

const InsightsList = ({ item }) => {
  return (
    <ListCard style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/profile.png")}
      />
      <Text style={styles.stats}>{item.stats}</Text>
      <Text style={styles.c}>{item.c}</Text>
    </ListCard>
  );
};

export default InsightsList;
