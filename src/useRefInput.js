import { useRef } from "react";

export const useRefInput = initialValue => {
  const inputElement = useRef(initialValue);
  return {
    resetValue: () => (inputElement.current.value = ""),
    getValue: () => inputElement.current.value,
    setFocus: () => inputElement.current.focus(),
    bind: {
      ref: inputElement
    }
  };
};
