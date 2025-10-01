import './benefit.css';

export default function Benefit(){
    return (
        <div className="benefit-container">
            <div className="benefit-background">
                <div className="parallax-overlay"></div>
            </div>
            
            <div className="benefit-content">
                <div className="benefit-text">
                    <h1 className="benefit-heading">
                        Find a place to charge yourself and your car
                    </h1>
                    <p className="benefit-subtitle">
                        Discover charging stations with comfortable cafes and amenities
                    </p>
                    <button className="explore-button">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}