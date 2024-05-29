import Header from "../../utilities/home/Header";
import FeaturedHouse from "../../utilities/home/FeaturedHouse";
import LetsTour from "../../utilities/home/LetsTour";
import HomeSec5 from "../../utilities/home/HomeSec5";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
         <Header/>
         <FeaturedHouse data={data}/>
         <LetsTour/>
         <HomeSec5/>
        </div>
    );
};

export default Home;