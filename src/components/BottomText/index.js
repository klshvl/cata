import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const BottomText = ({ onPress }) => {
  return (
    <View style={styles.bottomTextContainer}>
      <Text style={styles.textL}>Don't have an account?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textR}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(BottomText);
