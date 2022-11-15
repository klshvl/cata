import { View, FlatList } from "react-native";
import SectionTitle from "../../SectionTitle";

import InsightsList from "../InsightsList";
import MyCampaignsList from "../MyCampaignsList";
import TopCreatorsList from "../TopCreatorsList";

const ListView = ({ data, options, style }) => {
  const items = data.data[0];
  return (
    <View style={style}>
      <SectionTitle data={data} options={options} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={data.horizontal}
        data={items}
        renderItem={({ item }) => {
          if (data.sectionTitle === "My campaigns") {
            return <MyCampaignsList item={item} />;
          } else if (data.sectionTitle === "Top creators") {
            return <TopCreatorsList item={item} />;
          } else if (data.sectionTitle === "Insights") {
            return <InsightsList item={item} />;
          }
        }}
      />
    </View>
  );
};

export default ListView;
