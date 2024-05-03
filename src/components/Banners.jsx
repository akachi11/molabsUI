import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";

const Banners = ({ filtered }) => {
  return (
    <div>
      {!filtered && (
        <div className="banners">
          <img src={banner1} alt="" className="banner" />
          <img src={banner2} alt="" className="banner" />
          <img src={banner1} alt="" className="banner" />
        </div>
      )}
    </div>
  );
};

export default Banners;
