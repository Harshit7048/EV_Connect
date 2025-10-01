import './testimonial.css'

export default function Testimonial(){
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            review: "EVConnect has revolutionized my daily commute! The charging stations are always available and the cafes provide the perfect environment to work while my car charges. Highly recommended!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            review: "The app is incredibly user-friendly and the charging network is extensive. I love how I can find quality coffee shops while my Tesla charges. It's changed how I view electric vehicle ownership.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            review: "As a busy professional, EVConnect saves me time and provides a great experience. The premium charging stations with comfortable seating areas make waiting enjoyable. Five stars!",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span 
                key={index} 
                className={`star ${index < rating ? 'filled' : 'empty'}`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="testimonial-container">
            <div className="testimonial-header">
                <h2 className="testimonial-title">
                    What People Says
                </h2>
                <p className="testimonial-subtitle">
                    Discover why thousands of EV drivers trust EVConnect for their charging needs
                </p>
            </div>
            
            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="stars-container">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-review">"{testimonial.review}"</p>
                        </div>
                        
                        <div className="testimonial-author">
                            <div className="author-image">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="author-info">
                                <h4 className="author-name">{testimonial.name}</h4>
                                <p className="author-title">EV Driver</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}