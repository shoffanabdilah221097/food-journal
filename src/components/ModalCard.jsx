import React from "react";
import { Modal } from "react-bootstrap";

const ModalCard = ({show, onHide, food}) => {
  return (
      <Modal show={show} onHide={onHide} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={food.imageUrl} alt="food" style={{width : "100%", height: "300px"}} />
          <p>{food.description}</p>
          <p>ID: {food.id}</p>
          <p>Ingredients: {food.ingredients.join(", ")}</p>
          <p>Rating: {food.rating}</p>
          <p>Total Likes: {food.totalLikes}</p>
          <p>Is Liked: {food.isLike ? "Yes" : "No"}</p>
        </Modal.Body>
      </Modal>
  )
};

export default ModalCard;
