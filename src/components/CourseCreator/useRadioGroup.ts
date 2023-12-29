import { useEffect, useRef } from "react";

function useRadioGroup(
  buttonsRef: React.MutableRefObject<HTMLDivElement>,
  isOpen: boolean
) {
  const radioButtonsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (buttonsRef.current)
      radioButtonsRef.current = Array.from(
        buttonsRef.current.querySelectorAll('button[role="radio"]')
      );

    function handleKeyDown(e: KeyboardEvent) {
      const current = document.activeElement as HTMLButtonElement;
      const index =
        radioButtonsRef.current.indexOf(current) > -1
          ? radioButtonsRef.current.indexOf(current)
          : 0;

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp": {
          const previousIndex =
            index > 0 ? index - 1 : radioButtonsRef.current.length - 1;
          const targetButton = radioButtonsRef.current[previousIndex];
          e.preventDefault();
          targetButton.focus();
          break;
        }

        case "ArrowRight":
        case "ArrowDown": {
          const nextIndex = (index + 1) % radioButtonsRef.current.length;
          const targetButton = radioButtonsRef.current[nextIndex];
          e.preventDefault();
          targetButton.focus();
          break;
        }
      }
    }

    if (buttonsRef.current) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [buttonsRef.current, isOpen]);
}

export default useRadioGroup;
