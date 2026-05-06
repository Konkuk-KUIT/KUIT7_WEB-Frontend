import { useState } from "react";

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [booleanState, setBooleanState] = useState<boolean>(initialValue);

  const toggleBooleanState = () => {
    setBooleanState((boolean) => !boolean);
  };

  return [booleanState, toggleBooleanState];
}
