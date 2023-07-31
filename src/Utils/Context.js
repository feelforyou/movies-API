import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={"test"}>{children}</GlobalContext.Provider>
  );
};
export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);
