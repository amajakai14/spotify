import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [topArtists, setTopArtists] = useState([]);

  return (
    <StateContext.Provider
      value={{ token, setToken, topArtists, setTopArtists }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
