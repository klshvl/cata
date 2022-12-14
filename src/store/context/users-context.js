import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [listView, setListView] = useState("list");

  return (
    <UsersContext.Provider value={{ user, setUser, listView, setListView }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
