import { useContext } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/TabsScreens/HomeScreen";
import CreatorsScreen from "../screens/TabsScreens/CreatorsScreen";
import BookingsScreen from "../screens/TabsScreens/BookingsScreen";
import InsightsScreen from "../screens/TabsScreens/InsightsScreen";
import { UsersContext } from "../store/context/users-context";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { setUser } = useContext(UsersContext);

  const icons = (size = 20, name, style, onPress) => {
    return <Ionicons name={name} size={size} style={style} onPress={onPress} />;
  };

  const logoutHandler = () => {
    setUser(false);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size }) => icons(size, "home-outline"),
            headerTitle: "",
            headerRight: () => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 20,
                  }}
                >
                  {icons(25, "md-search", { marginRight: 20 })}
                  {icons(25, "md-notifications-outline")}
                </View>
              );
            },
            headerLeft: () =>
              icons(30, "log-out-outline", { marginLeft: 20 }, logoutHandler),
          }}
        />
        <Tab.Screen
          name="Creators"
          component={CreatorsScreen}
          options={{
            tabBarIcon: ({ size }) => icons(size, "people-outline"),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={{
            tabBarIcon: ({ size }) => icons(size, "calendar-outline"),
          }}
        />
        <Tab.Screen
          name="Insights"
          component={InsightsScreen}
          options={{
            tabBarIcon: ({ size }) => icons(size, "stats-chart-outline"),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
