import React, { createContext, useMemo } from 'react';
import usePointer from '../hooks/usePointer';

const Context = createContext(null);

function AppContext({ children }) {
  const { pointer, setPointer } = usePointer();
  const value = useMemo(() => ({
    pointer, setPointer,
  }), [pointer, setPointer]);
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { AppContext, Context };
