import NavbarV2 from "../component/NavV2";
import ImageBackground from "../component/carousel";
import Ctas from "../component/cta";
import TabMenu from "../component/filtertab";
import FilterTab from "../component/filtertab";
import Hero from "../component/hero";


const Home = () => {
    return ( 
       <div>
           <Hero />
           <NavbarV2 />
           <ImageBackground />
           <Ctas />
           <TabMenu />
       </div>
     );
}
 
export default Home;