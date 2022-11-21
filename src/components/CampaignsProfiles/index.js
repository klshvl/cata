import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const CampaignProfiles = ({ imageArr }) => {
  const maxLen = 4;

  const otherImgs = () => {
    if (imageArr.length > maxLen) {
      return (
        <View
          style={[
            styles.image,
            styles.otherImgs,
            {
              zIndex: maxLen,
              left: maxLen * 25,
            },
          ]}
        >
          <Text style={styles.text}>+{imageArr.length - maxLen}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.imgContainer}>
      {imageArr.slice(0, maxLen).map((source, index) => {
        return (
          <View
            key={source + index}
            style={{ zIndex: index, left: index * 25, position: "absolute" }}
          >
            <Image style={styles.image} source={source} />
          </View>
        );
      })}
      {otherImgs()}
    </View>
  );
};

export default CampaignProfiles;
