import "../card/Card.css";
import {Link} from "react-router-dom";


function Card({details, index}) {
    return (
    
    // Utilisation de Link pour envelopper chaque carte
        <Link to={`/product/${details.id}`} key={`gallery-${index}`}>
            <div className="card">
                <p className="pGallery">{details.title}</p>  
                <img className="imgGallery" src={details.cover} alt={details.title} /> 
            </div>
        </Link>
    
    );    
}
export default Card;