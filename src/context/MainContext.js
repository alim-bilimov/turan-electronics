import React, { createContext, useContext } from "react";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);

const MainContext = ({ children }) => {
  const values = {};

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MainContext;
