import { useState } from 'react';

function usePointer() {
  const [pointer, setPointer] = useState(false);
  return {
    pointer,
    setPointer,
  };
}

export default usePointer;
