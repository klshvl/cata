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

  const icons = (size = 20, name, style, onPress, color) => {
    return (
      <Ionicons
        name={name}
        size={size}
        style={style}
        onPress={onPress}
        color={color}
      />
    );
  };

  const logoutHandler = () => {
    setUser(false);
  };

  const headerHandler = () => {
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
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "",
          headerRight: headerHandler,
          headerLeft: () =>
            icons(30, "log-out-outline", { marginLeft: 20 }, logoutHandler),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) =>
              icons(size, "home-outline", null, null, color),
          }}
        />
        <Tab.Screen
          name="Creators"
          component={CreatorsScreen}
          options={{
            tabBarIcon: ({ size, color }) =>
              icons(size, "people-outline", null, null, color),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={{
            tabBarIcon: ({ size, color }) =>
              icons(size, "calendar-outline", null, null, color),
          }}
        />
        <Tab.Screen
          name="Insights"
          component={InsightsScreen}
          options={{
            tabBarIcon: ({ size, color }) =>
              icons(size, "stats-chart-outline", null, null, color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
