import { useEffect } from "react";

function useRadioGroup(buttonsRef: React.MutableRefObject<HTMLDivElement>) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Get the currently focused button
      const current = document.activeElement as HTMLButtonElement;

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          {
            const parent = current.parentElement
              ?.parentElement as HTMLDivElement;
            const previousSibling =
              parent.previousElementSibling as null | HTMLDivElement;
            const firstChild =
              previousSibling?.firstChild as null | HTMLDivElement;
            const targetButton = firstChild?.firstChild as HTMLButtonElement;
            targetButton?.focus();
            console.log(targetButton);
          }
          break;

        case "ArrowRight":
        case "ArrowDown":
          {
            const parent = current.parentElement
              ?.parentElement as HTMLDivElement;
            const nextSibling =
              parent.nextElementSibling as null | HTMLDivElement;
            const firstChild = nextSibling?.firstChild as null | HTMLDivElement;
            const targetButton = firstChild?.firstChild as HTMLButtonElement;
            targetButton?.focus();
            console.log(targetButton);
          }
          break;
      }
    }

    console.log(buttonsRef.current);

    // Add event listener if buttons ref exists
    if (buttonsRef.current) {
      console.log("adding a listener");
      document.addEventListener("keydown", handleKeyDown);

      // Remove listener on cleanup
      return () => {
        console.log("removing a listener");
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [buttonsRef]);
}

export default useRadioGroup;
