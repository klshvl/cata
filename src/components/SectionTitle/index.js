import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { getStyles } from "./styles";
import CustomButton from "../CustomButton";

const SectionTitle = ({ data, options, pressed }) => {
  const styles = getStyles(pressed);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{data.sectionTitle}</Text>
      {data.sectionTitle === "My campaigns" && (
        <TouchableOpacity style={styles.myCamaignsBtns}>
          <Text style={styles.myCamaignsBtn}>{options}</Text>
        </TouchableOpacity>
      )}
      {data.sectionTitle === "Insights" && (
        <View style={styles.btnsContainer}>
          <CustomButton
            title={options[0]}
            btnContainerStyle={styles.insightsBtns}
            btnPressedStyle={styles.pressed}
            btnTextStyle={styles.insightsBtn}
          />
          <CustomButton
            title={options[1]}
            btnContainerStyle={styles.insightsBtns}
            btnPressedStyle={styles.pressed}
            btnTextStyle={styles.insightsBtn}
          />
          <CustomButton
            title={options[2]}
            btnContainerStyle={styles.insightsBtns}
            btnPressedStyle={styles.pressed}
            btnTextStyle={styles.insightsBtn}
          />
        </View>
      )}
    </View>
  );
};

export default SectionTitle;
