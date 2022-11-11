import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import Tabs from "./src/navigation/Tabs";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isFontLoaded) return null;

  return (
    <>
      {/* <SafeAreaView>
        <LoginScreen />
      </SafeAreaView> */}
      <Tabs />
    </>
  );
}
