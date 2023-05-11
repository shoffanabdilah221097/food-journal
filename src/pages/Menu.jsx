// import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CardFood from "../components/CardFood";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  if (!isLogin) navigate('/')
  return (
    <>
      <Navigation />
      <CardFood />
      <Footer />
    </>
  );
}

export default Menu;
