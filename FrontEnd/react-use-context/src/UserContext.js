import { createContext, useState, useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "John",
    email: "john@email.com",
    dob: "01/01/200",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);