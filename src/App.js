import { useEffect } from "react";
import "./App.css";
import Home from "./containers/Home";
import axios from "axios";

function App() {
  const getFoods = async () => {
    try {
      const fetch = await axios
        .get("https://molabsapi.onrender.com/api/foods/get-all")
        .then((res) => localStorage.setItem("foods", JSON.stringify(res.data)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
