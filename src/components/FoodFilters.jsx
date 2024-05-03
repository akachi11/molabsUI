import FastfoodIcon from "@mui/icons-material/Fastfood";
import axios from "axios";
import { useEffect, useState } from "react";

const FoodFilters = ({ setSearchTerm }) => {
  const [foods, setFoods] = useState();

  useEffect(() => {
    let apiFoods = JSON.parse(localStorage.getItem("foods"));
    setFoods([]);
    apiFoods.map((food, i) => {
      setFoods((prevFoods) => [...prevFoods, food.name]);
    });
  }, []);

  return (
    <div className="food-filters">
      {foods?.map((food, i) => (
        <div onClick={() => setSearchTerm(food)} key={i} className="f-filter">
          <FastfoodIcon style={{ margin: "auto" }} />
          <p>{food.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodFilters;
