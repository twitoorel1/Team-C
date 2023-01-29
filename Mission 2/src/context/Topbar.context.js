import { createContext, useContext, useState } from "react";

const TopbarContext = createContext();

export const useTopbarContext = () => useContext(TopbarContext);

export default function TopbarProvider({ children }) {
  const [searchFiled, setSearchFiled] = useState("");

  const contextValues = {
    searchFiled,
    setSearchFiled
  };

  return (
    <TopbarContext.Provider value={contextValues}>
      {children}
    </TopbarContext.Provider>
  );
}
