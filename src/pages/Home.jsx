import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpg';

function Home() {
  return (
    <>
      <Navigation></Navigation>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <div className="text-food">
          <p>Best Food In Indonesia. Delicious food made with love and passion.</p>
          <p>Satisfy your cravings with our delicious food.</p>
          </div>
          <Link to={"/Menu"}>
            <button className="btn btn-secondary btn-outline-warning " style={{borderRadius:"5px"}}>Order Now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
