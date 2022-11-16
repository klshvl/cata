import { useFonts } from "expo-font";
import UsersContextProvider from "./src/store/context/users-context";

import Navigation from "./src/navigation/Navigation";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isFontLoaded) return null;

  return (
    <UsersContextProvider>
      <Navigation />
    </UsersContextProvider>
  );
}
