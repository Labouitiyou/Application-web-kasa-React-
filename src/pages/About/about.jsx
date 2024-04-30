import "../About/about.css"
import imgbanner2 from "../../assets/ImgBanner2.png";
import Banner from "../../components/banner/banner";


const About = () => {

    return (
        <div className="wrapperAbout">
            <Banner img={imgbanner2} alt="image"/>
          <div className="containerDiv">
           <p> Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. </p>
           <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
           <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </p>
           <p> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaques logements correspond aux critères de sécurités établie par nos services En laissant une note aussi bien à l'hôte qu'aux locataires, cela permet à nos équipes de vérifier que les standards sont bien respetés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. </p>
          </div>
        </div>
    );
};

export default About;