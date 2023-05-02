import { useState, useEffect } from "react";
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navigation from "../components/Navigation";

import {apiFood} from '../api/apiFood';

function Menu() {

  const [food, setFood] = useState([]);

  const iniTokenDariLogin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bWlsYW5nMTgyMDEzQGdtYWlsLmNvbSIsInVzZXJJZCI6IjU1NmZiOTQ0LTc0ZGUtNDQ0YS1iNmJiLTEyZjRlMThiZDk1ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzAzNzc3OX0.JQQ5Ldzt31QWdF2RypwfZ5K5O9Y5mfQHZLoI_hzmvEk";

  const getFood = async () => {
    try {
      const result = await apiFood.get('/foods',{
        headers : {
          Authorization : `Bearer ${iniTokenDariLogin}`
        }
      })

      setFood(result.data.data);

    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="menu-container">
        {food.map((eachFood, idx)=>{
          return (
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={eachFood.imageUrl} title="menu" />
              <Card.Body>
                <Card.Title style={{color: 'black'}}>{eachFood.name}</Card.Title>
                <Card.Text style={{color: 'black'}}>
                  {eachFood.description}
                </Card.Text>
                <Link to={`/menu/${eachFood.id}`} className="btn btn-primary">Lihat detail</Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  );
}

export default Menu;
