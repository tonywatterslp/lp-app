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
}

const TemplateCard = (props: ITemplateProps) => {
  const { template, selected } = props;
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        border: selected ? "3px solid #2196f3" : "none",
      }}
    >
      <CardActionArea
        onClick={() => console.log(`Clicked on ${template.title}`)}
      >
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
            style={{
              fontWeight: "normal",
              fontSize: "1.4em",
              textAlign: "center",
            }}
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
