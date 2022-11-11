import { Text, View } from "react-native";

import { styles } from "./styles";

const SectionTitle = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{data.sectionTitle}</Text>
    </View>
  );
};

export default SectionTitle;
