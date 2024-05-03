import SortIcon from "@mui/icons-material/Sort";
import { useEffect, useState } from "react";
import banner1 from "../assets/food.jpg";
import banner2 from "../assets/food.jpg";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const Feed = ({ searchTerm, selectedSort, setSelectedSort }) => {
  const [sorted, setSorted] = useState(false);
  const [feed, setFeed] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState();

  const sortParams = [
    { title: "Most popular", value: "popular" },
    { title: "Highest rated", value: "hRated" },
    { title: "Newest", value: "newest" },
    { title: "Most rated", value: "mRated" },
  ];

  const getFoodFeed = async (term) => {
    setFeed([]);
    allRestaurants.map((restaurant, i) => {
      if (restaurant.name.toLowerCase().includes(term.toLowerCase())) {
        setFeed((prevFeed) => [...prevFeed, restaurant]);
      }
    });
    try {
      const fetch = await axios
        .post("https://molabsapi.onrender.com/api/restaurant/get-by-food", {
          food: searchTerm.toLowerCase(),
        })
        .then((res) => {
          res.data.map((food, i) => {
            setFeed((prevFeed) => [...prevFeed, food]);
          });
        });
    } catch (error) {
      console.log(error);
    }

    console.log(feed);
  };

  const getAllFeed = async () => {
    try {
      const fetch = await axios
        .get("https://molabsapi.onrender.com/api/restaurant/get-all")
        .then((res) => {
          setAllRestaurants(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const sortByRating = () => {
    setFeed([]);
    let ratingFeed = [];
    ratingFeed = allRestaurants.sort(({ rating: a }, { rating: b }) => b - a);
    setFeed(ratingFeed);
  };

  const sortByRated = () => {
    setFeed([]);
    let ratingFeed = [];
    ratingFeed = allRestaurants.sort(
      ({ numberOfRaters: a }, { numberOfRaters: b }) => b - a
    );
    setFeed(ratingFeed);
  };

  const getByNewest = async () => {
    setFeed([]);
    try {
      const fetch = await axios
        .get("https://molabsapi.onrender.com/api/restaurant//get-by-date")
        .then((res) => {
          res.data.map((food, i) => {
            setFeed((prevFoodFeed) => [...prevFoodFeed, food]);
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeed();
  }, []);

  useEffect(() => {
    if (searchTerm != "" || selectedSort != "") {
      setSorted(true);
    } else {
      setSorted(false);
    }
  }, [searchTerm, selectedSort]);

  useEffect(() => {
    if (searchTerm) {
      getFoodFeed(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (selectedSort == "hRated") {
      sortByRating();
    } else if (selectedSort == "popular" || selectedSort == "mRated") {
      sortByRated();
    } else if (selectedSort == "newest") {
      getByNewest();
    }
    console.log(selectedSort);
  }, [selectedSort]);

  return (
    <div className="feed-container">
      <div className="desktop-feed">
        <div className="sticky-menu">
          <p className="smh-1">All Stores</p>
          <p>(409 Stores)</p>

          <p className="smh-2">
            <SortIcon /> <span>Sort</span>
          </p>
          <form>
            {sortParams.map((param, i) => (
              <div style={{ marginBottom: "1.5rem" }}>
                <input
                  type="radio"
                  name="sort-param"
                  id=""
                  value={param.value}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                {param.title} <br />
              </div>
            ))}
          </form>
        </div>
        <div className="feed-cont">
          <hr
            style={{
              backgroundColor: "#F0EEE4",
              height: ".1px",
              border: "none",
              marginBottom: "1rem",
            }}
          />
          <p className="smh-1">
            {searchTerm != "" ? searchTerm : "All Restaurants"}
          </p>
          <div className="feed-items">
            {(sorted ? feed : allRestaurants)?.map((restaurant, i) => (
              <div className="feed">
                <img src={banner1} alt="" className="feed-img" />
                <p className="restaurant">
                  {restaurant.name} - <span>{restaurant.location}</span>
                </p>
                <p className="r-foods">
                  {restaurant.foods.map((food, i, arr) => (
                    <span>
                      {food}
                      {i != arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <div className="ratings">
                  <p className="star">
                    <StarIcon style={{ color: "green", fontSize: "1rem" }} />
                    <p>{restaurant.rating.toFixed(1)}</p>
                  </p>
                  <p className="rating-no">
                    {restaurant.numberOfRaters}+ Ratings
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
