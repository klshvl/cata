import { useContext } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { DATA } from "../../../util/data";
import CreatorsProfilesList from "../../../components/CreatorsProfilesList";
import CreatorsProfilesColumn from "../../../components/CreatorsProfilesColumn";
import { UsersContext } from "../../../store/context/users-context";

const CreatorsScreen = () => {
  const { listView } = useContext(UsersContext);

  const data = DATA[1].data[0];

  const creatorsListHandler = ({ item }) => {
    return <CreatorsProfilesList item={item} />;
  };

  const creatorsColumnHandler = ({ item }) => {
    return <CreatorsProfilesColumn item={item} />;
  };

  return (
    <View style={styles.rootContainer}>
      {/* <FlatList
        key={listView === "columns" ? "_" : "#"}
        data={data}
        renderItem={creatorsListHandler}
        style={{ padding: 2 }}
        numColumns={listView === "columns" ? 2 : null}
      /> */}
      {listView === "list" ? (
        <FlatList
          key={"_"}
          data={data}
          renderItem={creatorsListHandler}
          style={{ padding: 2 }}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{ alignItems: "center" }}>
          <FlatList
            key={"#"}
            data={data}
            renderItem={creatorsColumnHandler}
            style={{
              padding: 2,
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default CreatorsScreen;
