import "../gallery/gallery.css";
import {Link} from "react-router-dom";


function Gallery({data}) {
    return (
        <div className="cardContainer">
            {data.map((details, index) => (
                    // Utilisation de Link pour envelopper chaque carte
                    <Link to={`/product/${details.id}`} key={`gallery-${index}`}>
                        <div className="card">
                            <p className="pGallery">{details.title}</p>  
                            <img className="imgGallery" src={details.cover} alt={details.title}/> 
                        </div>
                    </Link>
            ))}
        </div>
    );    
}

export default Gallery;