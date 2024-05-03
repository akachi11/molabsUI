import { useEffect, useState } from "react";
import Banners from "../components/Banners";
import Feed from "../components/Feed";
import FloatingButtons from "../components/FloatingButtons";
import FoodFilters from "../components/FoodFilters";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import "../styles.css";

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    if(searchTerm != '') {
      setFiltered(true)
    } else {
      setFiltered(false)
    }
  }, [searchTerm])

  return (
    <div>
      <Navbar setSelectedSort={setSelectedSort} cartOpen={cartOpen} setCartOpen={setCartOpen} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Tabs />
      <FoodFilters setSearchTerm={setSearchTerm} />
      <Banners filtered={filtered} />
      <Feed selectedSort={selectedSort} setSelectedSort={setSelectedSort} searchTerm={searchTerm} />
      <Footer />
      <FloatingButtons cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </div>
  );
};

export default Home;
