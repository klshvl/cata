import { View, SectionList } from "react-native";

import ListView from "../../../components/HomeScreenLists/ListView";
import SectionTitle from "../../../components/SectionTitle";

import { styles } from "./styles";

const DATA = [
  {
    sectionTitle: "My campaigns",
    // data: ["campaign1", "campaign2", "campaign3", "campaign4", "campaign5"],
    data: [
      [
        {
          c: "Yakiimoya Sep-Oct 21",
          time: "26/08/23 - 26/08/23",
          creators: "34",
          reach: "234K",
        },
        {
          c: "Yakiimoya Sep-Oct 21",
          time: "26/08/23 - 26/08/23",
          creators: "34",
          reach: "234K",
        },
        {
          c: "Yakiimoya Sep-Oct 21",
          time: "26/08/23 - 26/08/23",
          creators: "34",
          reach: "234K",
        },
        {
          c: "Yakiimoya Sep-Oct 21",
          time: "26/08/23 - 26/08/23",
          creators: "34",
          reach: "234K",
        },
        {
          c: "Yakiimoya Sep-Oct 21",
          time: "26/08/23 - 26/08/23",
          creators: "34",
          reach: "234K",
        },
      ],
    ],
  },
  {
    sectionTitle: "Top creators",
    // data: ["Elene", "Xio", "Tako", "Leluka", "Lukaluka", "Dima", "Lashuna"],
    data: [
      [
        { name: "Elene", social: "@social.social", followers: "14K followers" },
        { name: "Xio", social: "@social.social", followers: "14K followers" },
        { name: "Tako", social: "@social.social", followers: "14K followers" },
        {
          name: "Leluka",
          social: "@social.social",
          followers: "14K followers",
        },
        {
          name: "Lukaluka",
          social: "@social.social",
          followers: "14K followers",
        },
        { name: "Dima", social: "@social.social", followers: "14K followers" },
        {
          name: "Lashuna",
          social: "@social.social",
          followers: "14K followers",
        },
      ],
    ],
    horizontal: true,
  },
  {
    sectionTitle: "Insights",
    // data: ["Engagement", "Total Stories", "Total Posts"],
    data: [
      [
        { c: "Engagement", stats: "13K" },
        { c: "Total Stories", stats: "24" },
        { c: "Total Posts", stats: "7" },
      ],
    ],
    horizontal: true,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => {
          if (item.section.sectionTitle === "My campaigns") {
            return (
              <ListView
                data={DATA[0]}
                options="See all"
                style={[styles.containerVer, styles.margin]}
              />
            );
          } else if (item.section.sectionTitle === "Top creators") {
            return (
              <ListView
                data={DATA[1]}
                style={[styles.containerHor, styles.margin]}
              />
            );
          } else if (item.section.sectionTitle === "Insights") {
            return (
              <ListView
                data={DATA[2]}
                options={["Weekly", "Monthly", "All Time"]}
                style={styles.containerHor}
              />
            );
          }
        }}
        // renderSectionHeader={({ section: { sectionTitle } }) => (
        //   <SectionTitle sectionTitle={sectionTitle} />
        // )}
      />
    </View>
  );
};

export default HomeScreen;
