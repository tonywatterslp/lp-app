import { useEffect } from "react";

function useRadioGroup(buttonsRef: React.MutableRefObject<HTMLDivElement>) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Get the currently focused button
      const current = document.activeElement as HTMLButtonElement;

      console.log("here");

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          {
            const parent = current.parentElement as HTMLDivElement;
            const previousSibling =
              parent.previousElementSibling as null | HTMLDivElement;
            const firstChild =
              previousSibling?.firstChild as null | HTMLButtonElement;
            firstChild?.focus();
          }
          break;

        case "ArrowRight":
        case "ArrowDown":
          {
            const parent = current.parentElement
              ?.parentElement as HTMLDivElement;
            const nextSibling =
              parent.nextElementSibling as null | HTMLDivElement;
            const firstChild =
              nextSibling?.firstChild as null | HTMLButtonElement;
            firstChild?.focus();
          }
          break;
      }
    }

    // Add event listener if buttons ref exists
    if (buttonsRef.current) {
      document.addEventListener("keydown", handleKeyDown);

      // Remove listener on cleanup
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [buttonsRef]);
}

export default useRadioGroup;
