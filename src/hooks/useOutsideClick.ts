import { useEffect, useState } from "react";

interface PopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
export const useOutsideClick = (wrapperRef: any, inputRef: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setFocus] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
        setFocus(false);
      } else if (
        inputRef.current &&
        (inputRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    function handleFocus(eventInfo: string) {
      if (eventInfo === "focus") {
        setFocus(true);
      } else if (eventInfo === "blur") {
        setFocus(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => handleFocus("focus"));
      inputRef.current.addEventListener("blur", () => handleFocus("blur"));
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, inputRef]);
  const bind = {
    setIsOpenFn: (val: boolean) => {
      setIsOpen(val);
    },
  };
  return [isOpen, setIsOpen, isFocus, setFocus] as const;
};
