import "../gallery/gallery.css";
import Card from "../card/Card";


function Gallery({data}) {
    return (
        <div className="cardContainer">
            {data.map((details, index) => (
                <Card details={details} 
                      index={index} key={`card-${index}`}
                 /> 
            ))}
        </div>
    );    
}

export default Gallery;