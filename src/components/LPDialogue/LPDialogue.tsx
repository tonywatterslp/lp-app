import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function LPDialog({
  title,
  content,
  actions,
  isOpen,
  handleCloseDialog,
}: {
  title: string;
  content: string;
  actions: { title: string; action: () => void; isDangerous?: boolean }[];
  isOpen: boolean;
  handleCloseDialog: () => void;
}) {
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map(
          (
            action: {
              title: string;
              action: () => void;
              isDangerous?: boolean;
            },
            index: number
          ) => (
            <Button
              key={index}
              onClick={action.action}
              color={action.isDangerous ? "secondary" : "primary"}
            >
              {action.title}
            </Button>
          )
        )}
      </DialogActions>
    </Dialog>
  );
}
