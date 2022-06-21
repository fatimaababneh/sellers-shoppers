import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserContext } from '../App'
import { useNavigate } from "react-router-dom";
import "../assets/styling/components/productCard.css";
import { AddToCart } from "./addToCart";

export default function ProductCard({ product, store_id }) {
  const { id, product_name, product_description, price, product_image, owner_id } = product;
  const { user } = React.useContext(UserContext);
    const [loggedUser, setLoggedUser] = user;
  const navigate = useNavigate();
  return (
    <Card className="product-card" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={product_image} alt={product_name} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {product_name}
        </Typography>
        <Typography variant="h5" color="#9c27b0">
          Price: JOD {price}
        </Typography>
        <Typography className="desc" variant="body2" color="text.secondary">
          {product_description ? product_description: "No description available"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity:{"700"}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => navigate(`/store=${store_id}/product=${id}`)}
          size="small"
        >
          Show More
        </Button>
        { loggedUser.id != owner_id &&
        <AddToCart prod={product} />}

      </CardActions>
    </Card>
  );
}
