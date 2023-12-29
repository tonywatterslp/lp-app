import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  makeStyles,
  styled,
} from "@mui/material";
import { Template } from "./CourseCreator";

interface ITemplateProps {
  template: Template;
  isSelected: boolean;
  clickHandler: () => void;
  isFirst: boolean;
}

const StyledCardActionArea = styled(CardActionArea)({
  "&.Mui-focusVisible": {
    outline: "3px solid darkgrey",
  },
  ":focus": {
    outline: "3px solid darkgrey",
  },
});

const TemplateCard = (props: ITemplateProps) => {
  const { template, isSelected, clickHandler, isFirst } = props;
  const templateId = `template-id-${template.id}`;

  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "20px",
        border: isSelected ? "5px solid #2196f3" : "0px",
        padding: isSelected ? 0 : 5,
        background: "transparent",
      }}
    >
      <StyledCardActionArea
        onClick={clickHandler}
        role="radio"
        aria-checked={isSelected ? true : false}
        tab-index={isFirst ? "0" : "-1"}
        style={{
          borderRadius: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          background: "white",
        }}
        aria-labelledby={templateId}
      >
        <CardMedia
          component="img"
          height="80"
          image={template.image}
          alt={template.title}
          style={{
            borderRadius: "15px 15px 0px 0px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <CardContent>
          <Typography
            id={templateId}
            variant="h5"
            component="h3"
            style={
              isSelected
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
      </StyledCardActionArea>
    </Card>
  );
};

export default TemplateCard;
