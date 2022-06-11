import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "../assets/styling/components/storeCard.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";

export default function StoreCard({ id, name, owner, img, desc }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="store-card"
      onClick={() => {
        navigate(`/store/${id}`);
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {owner.charAt(0)}
          </Avatar>
        }
        title={name}
      />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc ? desc : "No description Available !"}
        </Typography>
      </CardContent>
    </Card>
  );
}
