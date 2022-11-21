import { View, SectionList } from "react-native";

import ListView from "../../../components/HomeScreenLists/ListView";

import { styles } from "./styles";
import { DATA } from "../../../util/data";

const HomeScreen = () => {
  const renderSections = (item) => {
    if (item.section.sectionTitle === "My campaigns") {
      return (
        <ListView data={DATA[0]} options="See all" style={styles.margin} />
      );
    } else if (item.section.sectionTitle === "Top creators") {
      return <ListView data={DATA[1]} style={styles.margin} />;
    } else if (item.section.sectionTitle === "Insights") {
      return (
        <ListView data={DATA[2]} options={["Weekly", "Monthly", "All Time"]} />
      );
    }
  };

  return (
    <View style={styles.rootContainer}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderSections}
      />
    </View>
  );
};

export default HomeScreen;
