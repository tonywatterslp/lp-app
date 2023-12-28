import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Template } from "./CourseCreator";

interface ITemplateProps {
  template: Template;
  selected: boolean;
  clickHandler: () => void;
}

const TemplateCard = (props: ITemplateProps) => {
  const { template, selected, clickHandler } = props;
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        border: selected ? "5px solid #2196f3" : "5px solid #ffffff",
      }}
    >
      <CardActionArea onClick={clickHandler}>
        <CardMedia
          component="img"
          height="80"
          image={template.image}
          alt={template.title}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="h3"
            style={
              selected
                ? {
                    fontWeight: "bold",
                    fontSize: "1.4em",
                    textAlign: "center",
                  }
                : {
                    fontWeight: "normal",
                    fontSize: "1.4em",
                    textAlign: "center",
                  }
            }
          >
            {template.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              marginTop: "0.1rem",
              fontSize: "1.1em",
              textAlign: "center",
              display: "block",
              height: 36,
            }}
          >
            {template.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TemplateCard;
