import { useState } from "react";
import LPDialog from "../LPDialogue/LPDialogue";
import { Button } from "@mui/material";

export default function Dialogue() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
      <LPDialog
        title="Are you sure you want to delete this item?"
        content="This will happen instantly and cannot be undone"
        actions={[
          {
            title: "Cancel",
            action: () => {
              console.log("Cancel button clicked");
              handleCloseDialog();
            },
          },
          {
            title: "Delete",
            action: () => {
              console.log("Delete button clicked");
              handleCloseDialog();
            },
            isDangerous: true,
          },
        ]}
        isOpen={openDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </>
  );
}
