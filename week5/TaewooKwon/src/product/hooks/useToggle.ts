import { useState } from 'react';

export function useToggle(initialValue: boolean) {
  const [booleanState, setBooleanState] = useState<boolean>(initialValue);

  const toggleBooleanState = () => {
    setBooleanState((boolean) => !boolean);
  };

  return [booleanState, toggleBooleanState] as const;
}
