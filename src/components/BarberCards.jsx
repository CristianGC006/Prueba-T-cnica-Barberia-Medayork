import './BarberCards.css';

const BarberCard = ({ barber, isSelected, onSelect }) => {
    return (
        <div 
            className={`barber-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(barber.id)}
        >
            <div className="barber-image-container">
                <img 
                    src={barber.image || "ruta-imagen-default"} 
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