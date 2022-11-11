import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/TabsScreens/HomeScreen";
import CreatorsScreen from "../screens/TabsScreens/CreatorsScreen";
import BookingsScreen from "../screens/TabsScreens/BookingsScreen";
import InsightsScreen from "../screens/TabsScreens/InsightsScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const icons = (size = 20, name) => {
    return <Ionicons name={name} size={size} />;
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
            headerRight: ({ color }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 20,
                  }}
                >
                  <Ionicons
                    name="md-search"
                    size={25}
                    color={color}
                    style={{ marginRight: 20 }}
                  />
                  <Ionicons
                    name="md-notifications-outline"
                    size={25}
                    color={color}
                  />
                </View>
              );
            },
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
