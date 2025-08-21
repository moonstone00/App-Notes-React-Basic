import { useEffect } from "react";

function useEqualHeight(className) {
  useEffect(() => {
    const elements = document.querySelectorAll(className);
    let maxHeight = 0;

    elements.forEach(el => {
      el.style.height = "auto";
      if (el.offsetHeight > maxHeight) {
        maxHeight = el.offsetHeight;
      }
    });

    elements.forEach(el => {
      el.style.height = `${maxHeight}px`;
    });
  }, [className]);
}

export default useEqualHeight;
