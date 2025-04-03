import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useNavigationThemeContext } from "../../context/ThemeContext";

// Styled wrapper for the color picker
const ColorPickerWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "250px",
}));

// Styled input for better integration with MUI
const StyledInput = styled("input")(({ theme }) => ({
  width: "100%",
  height: "40px",
  border: "none",
  cursor: "pointer",
  "&::-webkit-color-swatch-wrapper": {
    padding: 0,
  },
  "&::-webkit-color-swatch": {
    border: "none",
    borderRadius: theme.shape.borderRadius,
  },
}));

// Color option component with label
const ColorOption = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

interface ColorPickerProps {
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ className }) => {
  const { navColors, setNavColors } = useNavigationThemeContext();

  // Handle color change for a specific color property
  const handleColorChange =
    (colorProperty: keyof typeof navColors) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNavColors((prevColors) => ({
        ...prevColors,
        [colorProperty]: e.target.value,
      }));
    };

  return (
    <ColorPickerWrapper className={className}>
      <Typography variant="h6" component="div">
        Navigation Theme Colors
      </Typography>

      <ColorOption>
        <Typography variant="body2">Primary Color</Typography>
        <StyledInput
          type="color"
          value={navColors.main}
          onChange={handleColorChange("main")}
          aria-label="Choose primary color for navigation"
        />
      </ColorOption>

      <ColorOption>
        <Typography variant="body2">Background Color</Typography>
        <StyledInput
          type="color"
          value={navColors.background}
          onChange={handleColorChange("background")}
          aria-label="Choose background color for navigation"
        />
      </ColorOption>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
