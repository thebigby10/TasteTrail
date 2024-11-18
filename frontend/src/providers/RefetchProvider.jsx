/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RefetchContext = createContext(null);

const RefetchProvider = ({ children }) => {
  const [refetch, setRefetch] = useState(true);
  return (
    <RefetchContext.Provider value={{refetch, setRefetch}}>
      {children}
    </RefetchContext.Provider>
  );
};

export default RefetchProvider;
