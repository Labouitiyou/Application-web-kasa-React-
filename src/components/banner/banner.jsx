import "../banner/banner.css";

const Banner = (props) => {

  return (
    <div className="wrapperBanner">
        <div className="bgOpacity" style={{ opacity: props.opacity }}></div>
        <img className="imgBanner" src={props.img} alt="banner"/>
        <h1 className="titleBanner" style={{ display: props.display }}>Chez vous, partout et ailleurs </h1>
        <h1 className="titleBannermobile">Chez vous,<br></br> partout et ailleurs </h1>


    </div>
  );
};

export default Banner