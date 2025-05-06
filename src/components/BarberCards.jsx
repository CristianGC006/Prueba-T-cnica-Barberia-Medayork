import './BarberCards.css';
import james from "../assets/james.jpg";
import david from "../assets/david.jpg";
import carlos from "../assets/carlos.jpg";
import robert from "../assets/robert.jpg";
const BarberCard = ({ barber, isSelected, onSelect }) => {
    const barberImages={
        1:carlos,
        2:james,
        3:david,
        4:robert,
    }
    return (
        <div 
            className={`barber-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(barber.id)}
        >
            <div className="barber-image-container">
                <img 
                    src={barberImages[barber.id]|| "ruta-imagen-default"} 
                    alt={`Barbero ${barber.name}`} 
                    className="barber-image"
                />
            </div>
            <h3 className="barber-name">{barber.name}</h3>
            <p className="barber-specialty">{barber.specialty}</p>
        </div>
    );
};

export default BarberCard;