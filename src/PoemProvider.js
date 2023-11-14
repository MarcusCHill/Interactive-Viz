import * as React from 'react';

export const PoemContext = React.createContext({})

export function PoemProvider({ children }){

  const [currVerse, setCurrVerse] = React.useState(1);

  return(
    <PoemContext.Provider value={{
      currVerse,
      setCurrVerse,
    }}>
      { children }
    </PoemContext.Provider>
  );
}
