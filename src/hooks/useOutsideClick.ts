import { useEffect } from "react";

export const useOutsideClick = (wrapperRef: any, handler: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(event.target)
      ) {
        handler();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, handler]);
};
