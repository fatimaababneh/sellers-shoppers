import React from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../../components/Hero";
import { products as productss } from "../../products";
import { stores } from "../../stores";
import BarLoader from "react-spinners/BarLoader";
import { Loading } from "../../components/loading";
import ProductCard from "../../components/ProductCard";
import { getStore } from "../../api/shopperAPI";

export const StorePage = () => {
  const { id } = useParams();
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    getStore(id, setProducts)

  }, []);

  return (
    <>
      {(!products) && <Loading />}
      {products && (
        <>
          <Hero title={products[0].store_name} img={products[0].store_image} />
          <div className="content">
            <div className="left-part">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              officia quasi numquam laudantium labore corporis sed laboriosam
              praesentium aliquid pariatur voluptatem nisi voluptatibus
              architecto, qui sit dicta, voluptatum molestiae itaque!
            </div>
            <div className="mid-part">
              {products.map((prd) => {
                return <ProductCard product={prd} store_id={id} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
