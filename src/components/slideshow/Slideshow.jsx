import { useState } from "react";
import { useParams } from "react-router-dom";
import "../slideshow/Slideshow.css";
import arrowLeft from "../../assets/arrowleft.png";
import arrowRight from "../../assets/arrowright.png";

function Slideshow(prop) {

    //récupère l'ID depuis le paramètres de l'URL
    const { id } = useParams();
    //recherche du produit correspondant ) l'ID dans le tableau "data"
    const product = prop.data.find(prod => prod.id === id);

    const imgNumber = product.pictures.length;

    //initialisation de l'indice de l'image actuelle à afficher et de sa fonction de mise à jour
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //passer à l'image precèdente
    const goToPreviousSlide = () => {
      if(currentImageIndex===0){
		setCurrentImageIndex(prevIndex => (imgNumber - 1));
	    }
	    else{
            setCurrentImageIndex(prevIndex => (prevIndex - 1));
       }
    };
    
    //passer à l'image suivante
    const goToNextSlide = () => {
       if(currentImageIndex === imgNumber - 1){
		setCurrentImageIndex(prevIndex => 0);
	    }
	    else{
            setCurrentImageIndex(prevIndex => (prevIndex + 1));
       }
    };

    return (
        <div className="carouselWrapper">
            <div className="imageContainer">
                {/*vérifier si le nombre total d'image est supérieur à 1*/}
                {imgNumber > 1 &&(
                <>
                 <img className="arrow left" src={arrowLeft} alt="Previous" onClick={goToPreviousSlide} />
                 <img className="imgCarousel" src={product.pictures[currentImageIndex]} alt={product.title} />
                 <img className="arrow right" src={arrowRight} alt="Next" onClick={goToNextSlide} />
                 <span className="numberImg">{currentImageIndex +1} / {imgNumber}</span>
                </>
            )}
               {/*vérifier si le nombre total d'image est égal à 1*/}
               {imgNumber === 1 && (<img className="imgCarousel" src={product.pictures[currentImageIndex]} alt={product.title} />)}
            </div>
        </div>
    );
}

export default Slideshow;