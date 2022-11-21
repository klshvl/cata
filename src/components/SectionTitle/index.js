import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import CustomButton from "../CustomButton";

const SectionTitle = ({ data, options }) => {
  const [filter, setFilter] = useState("Weekly");

  const weeklyBtnHandler = () => {
    setFilter("Weekly");
  };

  const monthlyBtnHandler = () => {
    setFilter("Monthly");
  };

  const alltimeBtnHandler = () => {
    setFilter("All Time");
  };

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
            btnContainerStyle={[
              styles.insightsBtns,
              filter === "Weekly" && styles.pressed,
            ]}
            btnTextStyle={[
              styles.insightsBtn,
              filter === "Weekly" && styles.pressedText,
            ]}
            onPress={weeklyBtnHandler}
          />
          <CustomButton
            title={options[1]}
            btnContainerStyle={[
              styles.insightsBtns,
              filter === "Monthly" && styles.pressed,
            ]}
            btnTextStyle={[
              styles.insightsBtn,
              filter === "Monthly" && styles.pressedText,
            ]}
            onPress={monthlyBtnHandler}
          />
          <CustomButton
            title={options[2]}
            btnContainerStyle={[
              styles.insightsBtns,
              filter === "All Time" && styles.pressed,
            ]}
            btnTextStyle={[
              styles.insightsBtn,
              filter === "All Time" && styles.pressedText,
            ]}
            onPress={alltimeBtnHandler}
          />
        </View>
      )}
    </View>
  );
};

export default SectionTitle;
