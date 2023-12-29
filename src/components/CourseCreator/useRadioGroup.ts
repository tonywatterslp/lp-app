import { useEffect, useRef } from "react";

function useRadioGroup(buttonsRef: React.MutableRefObject<HTMLDivElement>) {
  const radioButtonsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (buttonsRef.current) {
      radioButtonsRef.current = Array.from(
        buttonsRef.current.querySelectorAll('button[role="radio"]')
      );
    }

    function handleKeyDown(e: KeyboardEvent) {
      const current = document.activeElement as HTMLButtonElement;
      const index = radioButtonsRef.current.indexOf(current);

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp": {
          const previousIndex =
            index > 0 ? index - 1 : radioButtonsRef.current.length - 1;
          const targetButton = radioButtonsRef.current[previousIndex];
          targetButton.focus();
          break;
        }

        case "ArrowRight":
        case "ArrowDown": {
          const nextIndex = (index + 1) % radioButtonsRef.current.length;
          const targetButton = radioButtonsRef.current[nextIndex];
          targetButton.focus();
          break;
        }
      }
    }
    if (buttonsRef.current) {
      console.log("adding a listener");
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        console.log("removing a listener");
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [buttonsRef.current]);
}

export default useRadioGroup;
