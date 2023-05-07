import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { apiFood } from "../api/apiFood";
import Footer from "../components/Footer";

function Menu() {
  const [food, setFood] = useState([]);
  const iniTokenDariLogin =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk";

  const getFood = async () => {
    try {
      const result = await apiFood.get("/foods", {
        headers: {
          Authorization: `Bearer ${iniTokenDariLogin}`,
        },
      });
      setFood(result.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-5">
        <div className="row">
          <h4>Menu Category</h4>
          {food.slice(3, 15).map((eachFood, idx) => {
            return (
              <div className="col-md-4 col-lg-3 col-sm-6" key={idx}>
                <Card className="card" style={{height: "80%" }}>
                  <Card.Img variant="top" src={eachFood.imageUrl} title="menu" style={{height: "60%"}} />
                  <Card.Body className="card-body">
                    <Card.Title style={{ color: "black" }}>{eachFood.name}</Card.Title>
                    {/* <Card.Text style={{ color: "black" }}>{eachFood.description}</Card.Text> */}
                    <div className="card-container">
                    <Link to={`/menu/${eachFood.id}`} className="btn btn-primary">
                      Lihat detail
                    </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
