import './serviceCard.css';

const ServiceCard = ({ service, isSelected, onSelect }) => {
    return (
        <div 
            className={`service-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(service.id)}
        >
            <h3 className="service-name">{service.name}</h3>
            <p className="service-duration">{service.duration} minutos</p>
            <p className="service-price">${service.price}</p>
            <img className="service-image">{}</img>
        </div>
    );
};

export default ServiceCard;