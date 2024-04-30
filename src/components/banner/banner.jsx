import "../banner/banner.css";
import img from "../../assets/Img_Banner.png";

const Banner = () => {

  return (
    <div className="wrapperBanner">
      <div className="bgOpacity" ></div>
      <img className="imgBanner" src={img} alt="banner" />
      <h1 className="titleBanner">Chez vous, partout et ailleurs </h1>
    </div>
  );
};

export default Banner