import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
