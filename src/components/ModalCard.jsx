import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { apiFood } from "../api/apiFood";

const ModalCard = ({ show, onHide, food }) => {
  const [isLike, setIsLike] = useState(food.isLike);
  // const [likeInfo, setLikeInfo] = useState({
  //   isLike: food.isLike,
  //   totalLikes: food.totalLikes,
  // });

  const handleLike = async (e) => {
    e.preventDefault();
    try {
      const response = await apiFood.post("/like", {
        foodId: food.id,
      });
      // setLikeInfo((prevInfo) => ({
      //   ...prevInfo,
      //   isLike: true,
      //   totalLikes: prevInfo.totalLikes + 1,
      // }));
      setIsLike(true);
      food.totalLikes++
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLike = async (e) => {
    e.preventDefault();
    try {
      const response = await apiFood.post("/unlike", {
        foodId: food.id,
      });
      // setLikeInfo((prevInfo) => ({
      //   ...prevInfo,
      //   isLike: false,
      //   totalLikes: prevInfo.totalLikes - 1,
      // }));
      setIsLike(false);
      food.totalLikes--
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{food.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={food.imageUrl} alt="food" style={{ width: "100%", height: "300px" }} />
            {!isLike ? <i className="bx bx-heart" onClick={handleLike}></i> : <i className="bx bxs-heart" onClick={handleUnLike} style={{ color: "red" }}></i>}
          </div>
          <div className="col-md-6 col-12 tabel">
            <p>
              <span>Description Menu:</span> <br />
              {food.description}
            </p>
            <p>
              <span>ID:</span>
              <br /> {food.id}
            </p>
            <p>
              <span>Ingredients:</span> <br /> {food.ingredients.join(", ")}
            </p>
            <p>
              <span>Rating:</span> {food.rating}
            </p>
            <p>
              <span>Total Likes:</span> {food.totalLikes}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCard;
