import { View } from "react-native";

import { styles } from "./styles";

const ListCard = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default ListCard;
