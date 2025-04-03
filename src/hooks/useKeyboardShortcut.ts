import { useEffect } from "react";

type KeyHandler = () => void;

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  handler: KeyHandler;
}

/**
 * Custom hook to handle keyboard shortcuts
 * @param shortcuts Array of keyboard shortcut configurations
 */
const useKeyboardShortcut = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      shortcuts.forEach((shortcut) => {
        if (
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          (shortcut.ctrlKey === undefined ||
            event.ctrlKey === shortcut.ctrlKey) &&
          (shortcut.altKey === undefined || event.altKey === shortcut.altKey) &&
          (shortcut.shiftKey === undefined ||
            event.shiftKey === shortcut.shiftKey)
        ) {
          shortcut.handler();
          event.preventDefault();
        }
      });
    };

    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcuts]); // Re-run effect when shortcuts change
};

export default useKeyboardShortcut;
