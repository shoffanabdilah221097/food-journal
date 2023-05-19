import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { apiFood } from "../api/apiFood";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const DashboardFood = () => {
  const [foods, setFoods] = useState([]);
  const [modal, setModal] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");

  const showModal = (id) => {
    setModal(id);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getFood = async () => {
    try {
      const foods = await apiFood.get("/foods");
      console.log(foods.data.data);
      setFoods(foods.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const foodById = (e, id) => {
    e.preventDefault();
    apiFood
      .post(
        `/update-food/${id}`,
        {
          name: name,
          description: description,
          imageUrl: imageUrl,
          ingredients: [ingredients],
        },
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("food updated");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    apiFood
      .delete(`/delete-food/${id}`, {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk"} `,
        },
      })
      .then(() => {
        apiFood.get("/foods");
      })
      .then((response) => {
        console.log(response.data.data);
        setFoods(response.data.data);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      imageUrl: "",
      ingredients: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
      imageUrl: Yup.string().required(),
      ingredients: Yup.string().required(),
    }),
    onSubmit: (values) => {
      apiFood
        .post(
          "/create-food",
          {
            name: values.name,
            description: values.description,
            imageUrl: values.imageUrl,
            ingredients: values.ingredients,
          },
          {
            headers: {
              Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk"}`,
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        )
        .then((response) => {
          console.log(response);
          getFood();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="container dashboardfood">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>description</th>
              <th>imageUrl</th>
              <th>ingredients</th>
              <th colSpan={2}>action</th>
            </tr>
          </thead>
          {foods.map((food) => {
            return (
              <tbody key={food.id}>
                <tr>
                  <td>{food.id}</td>
                  <td>{food.name}</td>
                  <td>{food.description}</td>
                  <td>{food.imageUrl}</td>
                  <td>{food.ingredients.join(", ")}</td>
                  <td>
                    <button onClick={() => showModal(food.id)}>edit</button>
                  </td>
                  <td>
                    <button onClick={(e) => handleDelete(e, food.id)}>delete</button>
                  </td>
                </tr>

                {/* modal edit */}
                <Modal show={modal === food.id} onHide={closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={(e) => foodById(e, food.id)}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={food.name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} id="name" name="name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>description</Form.Label>
                        <Form.Control defaultValue={food.description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description} id="description" name="description" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>imageUrl</Form.Label>
                        <Form.Control defaultValue={food.imageUrl} type="text" placeholder="imageUrl" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} id="imageUrl" name="imageUrl" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>ingredients</Form.Label>
                        <Form.Control defaultValue={food.ingredients} type="text" placeholder="ingredients" onChange={(e) => setIngredients(e.target.value)} value={ingredients} id="ingredients" name="ingredients" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </tbody>
            );
          })}
        </Table>

        {/* create form */}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" placeholder="description" id="description" name="description" value={formik.values.description} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>imageUrl</Form.Label>
            <Form.Control type="text" placeholder="imageUrl" id="imageUrl" name="imageUrl" value={formik.values.imageUrl} onChange={formik.handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ingredients</Form.Label>
            <Form.Control type="text" placeholder="ingredients" id="ingredients" name="ingredients" value={formik.values.ingredients} onChange={formik.handleChange} />
          </Form.Group>
          <Button type="submit">submit</Button>
        </Form>
      </div>
    </>
  );
};

export default DashboardFood;
