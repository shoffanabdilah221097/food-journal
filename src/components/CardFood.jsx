import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { apiFood } from "../api/apiFood";
import ModalCard from "./ModalCard";

const CardFood = () => {
  const [food, setFood] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getFood = async () => {
    try {
      const result = await apiFood.get("/foods");
      console.log(result.data.data);
      setFood(result.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleCardClick = (id) => {
    setShowModal(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h4>Menu Category</h4>
        {console.log(food)}
        {food.slice(1, 13).map((eachFood, idx) => {
          return (
            <div className="col-md-4 col-lg-3 col-sm-6" key={idx}>
              <Card className="custom-card" onClick={() => handleCardClick(eachFood.id)} key={idx}>
                <Card.Img variant="top" src={eachFood.imageUrl} title="menu" style={{ height: "70%" }} />
                <Card.Body className="card-body">
                  <Card.Title className="card-title" style={{ color: "black" }}>
                    {eachFood.name}
                  </Card.Title>
                </Card.Body>
              </Card>
              <ModalCard show={showModal === eachFood.id} onHide={handleCloseModal} food={eachFood} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardFood;
