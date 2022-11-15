import { useContext } from "react";
import { UsersContext } from "../store/context/users-context";

import LoginScreen from "../screens/LoginScreen";
import Tabs from "./Tabs";

const Navigation = () => {
  const { user } = useContext(UsersContext);

  return user ? <Tabs /> : <LoginScreen />;
};

export default Navigation;
