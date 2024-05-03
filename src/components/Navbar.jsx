import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SortIcon from "@mui/icons-material/Sort";
import logo from "../assets/download.png";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AppleIcon from "@mui/icons-material/Apple";
import playstore from "../assets/playstore.png";

const Navbar = ({ cartOpen, setCartOpen, searchTerm, setSearchTerm, setSelectedSort }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [categories, setCategories] = useState(false);
  const [sort, setSort] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [foods, setFoods] = useState([]);

  const openSearch = () => {
    setSearchOpen(true);
    setCategories(true);
    sort && setSort(false);
  };

  const closeSearch = (e) => {
    e.preventDefault()
    setSearchOpen(false);
    setCategories(false);
  };

  const handleSort = () => {
    if (sort) {
      setSort(false);
    } else if (!sort) {
      setSort(true);
      if (searchOpen) {
        closeSearch();
      }
    }
  };

  const handleCategory = (categ) => {
    setCategories(false)
    setSearchTerm(categ)
  }

  const handleSelectedSort = (e) => {
    setSelectedSort(e.target.value)
    setSort(false)
  }

  const sortParams = [
    { title: "Most popular", value: "popular" },
    { title: "Highest rated", value: "hRated" },
    { title: "Newest", value: "newest" },
    { title: "Most rated", value: "mRated" },
  ];

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [sidebar]);

  useEffect(() => {
    let apiFoods = JSON.parse(localStorage.getItem("foods"));
    setFoods([]);
    apiFoods?.map((food, i) => {
      setFoods((prevFoods) => [...prevFoods, food.name]);
    });
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="mobile-navbar">
          <div className="mobile-nav-top">
            <div onClick={() => setSideBar(true)} className="mobile-menu">
              <MenuIcon />
            </div>
            <div className="location">
              <LocationOnIcon style={{ marginRight: ".5rem" }} />
              <p>Lagos</p>
            </div>
            <div onClick={() => setCartOpen(true)} className="cart-icon">
              <ShoppingCartIcon style={{ fontSize: "1.2rem" }} />
            </div>
          </div>

          <div className="mobile-nav-bottom">
            <div className={searchOpen ? "" : "hide"} onClick={closeSearch}>
              <CloseIcon />
            </div>
            <div
              className={
                "search " + (searchOpen ? "search-open" : "search-closed")
              }
              onClick={openSearch}
            >
              <SearchIcon
                style={{ fontSize: "1.5rem", width: "10%", color: "grey" }}
              />
              <form action="" onSubmit={closeSearch}>
                <input
                  type="text"
                  placeholder="Search restaurants or food"
                  name=""
                  id=""
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
            <div className="sort-icon" onClick={handleSort}>
              <SwapVertIcon style={{ fontSize: "1.2rem" }} />
            </div>
          </div>

          <div className={categories ? "categories" : "hide"}>
            <p className="categ-title">Categories</p>
            {foods?.map((categ, i) => (
              <div className="category" key={i}>
                <div onClick={() => handleCategory(categ)}>
                  <RestaurantIcon />
                  <p>{categ.toUpperCase()}</p>
                </div>
                <hr
                  style={{
                    backgroundColor: "#F0EEE4",
                    height: ".1px",
                    border: "none",
                    marginTop: "2rem",
                  }}
                />
              </div>
            ))}
          </div>

          <div className={sort ? "sort" : "hide"}>
            <div className="sort-title">
              <div>
                <SortIcon />
                <p>Sort</p>
              </div>
              <div onClick={handleSort}>
                <CloseIcon />
              </div>
            </div>
            <form className="sort-param">
              {sortParams.map((param, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name="sort-param"
                    id=""
                    value={param.value}
                    onChange={(e) => handleSelectedSort(e)}
                  />
                  {param.title} <br />
                </div>
              ))}
            </form>
          </div>
        </div>

        <div className="desktop-navbar">
          <div className="d-nav">
            <div onClick={() => setSideBar(true)} className="d-menu-icon">
              <MenuIcon style={{ cursor: "pointer" }} />
            </div>
            <img src={logo} alt="" className="logo" />
            <div className={!searchOpen ? "location" : "hide"}>
              <LocationOnIcon style={{ marginRight: ".5rem" }} />
              <p>Lagos</p>
            </div>
            <div
              className={
                "d-search " + (searchOpen ? "d-search-open" : "d-search-closed")
              }
              onClick={openSearch}
            >
              <SearchIcon
                style={{ fontSize: "1.5rem", width: "10%", color: "grey" }}
              />
              <form action="" onSubmit={closeSearch}>
                <input
                  type="text"
                  placeholder="Search restaurants or food"
                  name=""
                  id=""
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
            <div
              className={searchOpen ? "close-search" : "hide"}
              onClick={closeSearch}
            >
              <CloseIcon style={{ cursor: "pointer" }} />
            </div>
            <div className={!searchOpen ? "user" : "hide"}>
              <div className="sign-in">
                <p>SIGN IN</p>
              </div>
              <div onClick={() => setCartOpen(true)} className="cart">
                <ShoppingCartIcon style={{ cursor: "pointer" }} />
                <p>
                  CART
                  <span>
                    <CircleIcon
                      style={{ fontSize: ".5rem", margin: "0 .5rem" }}
                    />
                  </span>{" "}
                  0
                </p>
              </div>
            </div>
          </div>

          <div className={categories ? "d-categories" : "hide"}>
            <p className="categ-title">Categories</p>
            {foods?.map((categ, i) => (
              <div className="category" key={i}>
                <div>
                  <RestaurantIcon />
                  <p>{categ}</p>
                </div>
                <hr
                  style={{
                    backgroundColor: "#F0EEE4",
                    height: ".1px",
                    border: "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={sidebar ? "side-bar" : "hide"}>
          <div className="bar">
            <div onClick={() => setSideBar(false)} className="close-bar">
              <CloseIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="bar-signin">
              <LockOpenIcon style={{ color: "grey" }} />
              <p>Sign in</p>
            </div>
            <div className="bar-options">
              <p>Add your restaurant</p>
              <p>Become a delivery rider</p>
              <p>Go to Homepage</p>
            </div>
            <div className="bar-ads">
              <div className="ba-1">
                <img src={logo} alt="" />
                <p>Experience the Heyfood mobile app</p>
              </div>
              <div className="ba-2">
                <button>
                  <AppleIcon style={{ fontSize: "1.5rem" }} /> App Store
                </button>
                <button>
                  <img src={playstore} alt="" />
                  Play Store
                </button>
              </div>
            </div>
          </div>
          <div className="filler"></div>
        </div>

        <div className={cartOpen ? "side-cart" : "hide"}>
          <div className="cart-filler"></div>
          <div className="bar">
            <div className="close-cart">
              <div onClick={() => setCartOpen(false)}>
                <CloseIcon
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              </div>
              <p>Cart</p>
            </div>
            <div className="s-cart">
              <ShoppingCartIcon style={{ color: "grey", fontSize: "7rem" }} />
              <p>You have not added any items to your cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
