import { Pressable, Text, TouchableOpacity, View } from "react-native";

import { getStyles } from "./styles";

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
          <Pressable
            style={({ pressed }) =>
              pressed
                ? [styles.insightsBtns, styles.pressed]
                : styles.insightsBtns
            }
          >
            <Text style={styles.insightsBtn}>{options[0]}</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) =>
              pressed
                ? [styles.insightsBtns, styles.pressed]
                : styles.insightsBtns
            }
          >
            <Text style={styles.insightsBtn}>{options[1]}</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) =>
              pressed
                ? [styles.insightsBtns, styles.pressed]
                : styles.insightsBtns
            }
          >
            <Text style={styles.insightsBtn}>{options[2]}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default SectionTitle;
