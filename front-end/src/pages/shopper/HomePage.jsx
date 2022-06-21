import React from "react";
import "../../assets/styling/pages/homepage.css";
import CLK from "../../assets/images/cloud4.webp";
import { Hero } from "../../components/Hero";
import StoreCard from "../../components/StoreCard";
import { getAllStores } from "../../api/shopperAPI";
import {Loading} from "../../components/loading"



const HomePage = () => {
const[allStores, setAllStores] = React.useState()
  React.useEffect(() => {
    getAllStores(setAllStores)
  },[]);
  return (
    <div>
      {!allStores && <Loading />}
      {allStores && 
      <>
      <Hero title={"Stores"} />

      <div className="content">
        <div className="left-part">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia
          quasi numquam laudantium labore corporis sed laboriosam praesentium
          aliquid pariatur voluptatem nisi voluptatibus architecto, qui sit
          dicta, voluptatum molestiae itaque!
        </div>
        <div className="mid-part">
          {allStores.map((st) => {
            return (
              <StoreCard
              id={st.id}
              name={st.name}
              owner={st.owner}
              img={st.image}
              desc={st.description}
              />
              );
            })}
        </div>
      </div>
            </>
      
      }
    </div>
  );
};
export default HomePage;
