import React from "react";
import "../../assets/styling/pages/homepage.css";
import CLK from "../../assets/images/cloud4.webp";
import { Hero } from "../../components/Hero";
import StoreCard from "../../components/StoreCard";
import { getAllStores } from "../../api/shopperAPI";
import {Loading} from "../../components/loading"

const stores = [
  {
    id: 1,
    name: "store 1",
    owner: "user 1",
    count: 15,
    StoreImage:
      "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/211199830_2866640933598712_3370727019954040666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGjPAl_s7wjymZ5Gc8wHgT_NQ9ANvRs1po1D0A29GzWmmt9ZO2A-Yd4eK2Z_s2QrCr_2eBfpMetSlIyEuzsVXQ4&_nc_ohc=jvD21rlZxq0AX9spU7q&_nc_oc=AQnOOJx0e_fsEqIN1ggOSgOZ7ktfrG8ad4VAf_n8TAnfnqfJSyGjiZ6VuYASNPpQx3E&_nc_ht=scontent.famm10-1.fna&oh=00_AT88RioT6FfEyFYbjeLWqR0DqHv5V-rYv-c9-NAiaLJ3Ow&oe=62C9CE74",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime nulla placeat dolor. Hic possimus temporibus cupiditate eius cumque quasi commodi dolore nisi, nihil ex praesentium labore quos aperiam veritatis.",
  },
  {
    id: 2,
    name: "store 2",
    owner: "user 2",
    count: 17,
    StoreImage:
      "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/211199830_2866640933598712_3370727019954040666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGjPAl_s7wjymZ5Gc8wHgT_NQ9ANvRs1po1D0A29GzWmmt9ZO2A-Yd4eK2Z_s2QrCr_2eBfpMetSlIyEuzsVXQ4&_nc_ohc=jvD21rlZxq0AX9spU7q&_nc_oc=AQnOOJx0e_fsEqIN1ggOSgOZ7ktfrG8ad4VAf_n8TAnfnqfJSyGjiZ6VuYASNPpQx3E&_nc_ht=scontent.famm10-1.fna&oh=00_AT88RioT6FfEyFYbjeLWqR0DqHv5V-rYv-c9-NAiaLJ3Ow&oe=62C9CE74",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime nulla placeat dolor. Hic possimus temporibus cupiditate eius das dsa dsadas cumque quasi commodi dolore nisi, nihil ex praesentium labore quos aperiam veritatis.",
  },
  {
    id: 3,
    name: "store 3",
    owner: "user 3",
    count: 121,
    StoreImage:
      "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/211199830_2866640933598712_3370727019954040666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGjPAl_s7wjymZ5Gc8wHgT_NQ9ANvRs1po1D0A29GzWmmt9ZO2A-Yd4eK2Z_s2QrCr_2eBfpMetSlIyEuzsVXQ4&_nc_ohc=jvD21rlZxq0AX9spU7q&_nc_oc=AQnOOJx0e_fsEqIN1ggOSgOZ7ktfrG8ad4VAf_n8TAnfnqfJSyGjiZ6VuYASNPpQx3E&_nc_ht=scontent.famm10-1.fna&oh=00_AT88RioT6FfEyFYbjeLWqR0DqHv5V-rYv-c9-NAiaLJ3Ow&oe=62C9CE74",
    desc: "Lorem ipsum dolor sit amet consectdasdas dsadas vasddasdas dsadasdas casdasdas etur adipisicing elit. In maxime nulla placeat dolor. Hic possimus temporibus cupiditate eius cumque quasi commodi dolore nisi, nihil ex praesentium labore quos aperiam veritatis.",
  },
  {
    id: 4,
    name: "store 4",
    owner: "user 4",
    count: 164,
    StoreImage:
      "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/211199830_2866640933598712_3370727019954040666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGjPAl_s7wjymZ5Gc8wHgT_NQ9ANvRs1po1D0A29GzWmmt9ZO2A-Yd4eK2Z_s2QrCr_2eBfpMetSlIyEuzsVXQ4&_nc_ohc=jvD21rlZxq0AX9spU7q&_nc_oc=AQnOOJx0e_fsEqIN1ggOSgOZ7ktfrG8ad4VAf_n8TAnfnqfJSyGjiZ6VuYASNPpQx3E&_nc_ht=scontent.famm10-1.fna&oh=00_AT88RioT6FfEyFYbjeLWqR0DqHv5V-rYv-c9-NAiaLJ3Ow&oe=62C9CE74",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "store 5",
    owner: "user 5",
    count: 231,
    StoreImage:
      "https://scontent.famm10-1.fna.fbcdn.net/v/t1.6435-9/211199830_2866640933598712_3370727019954040666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGjPAl_s7wjymZ5Gc8wHgT_NQ9ANvRs1po1D0A29GzWmmt9ZO2A-Yd4eK2Z_s2QrCr_2eBfpMetSlIyEuzsVXQ4&_nc_ohc=jvD21rlZxq0AX9spU7q&_nc_oc=AQnOOJx0e_fsEqIN1ggOSgOZ7ktfrG8ad4VAf_n8TAnfnqfJSyGjiZ6VuYASNPpQx3E&_nc_ht=scontent.famm10-1.fna&oh=00_AT88RioT6FfEyFYbjeLWqR0DqHv5V-rYv-c9-NAiaLJ3Ow&oe=62C9CE74",
    desc: "Lorem ipsum dolor",
  },
];


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
