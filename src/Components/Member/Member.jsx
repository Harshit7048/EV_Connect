import './member.css';

export default function Member() {
    const steps = [
        {
            id: 1,
            title: "Login as Point",
            description: "Create your account and register as a charging point provider",
            icon: "🔐"
        },
        {
            id: 2,
            title: "Provide Documents",
            description: "Submit necessary documentation and location details",
            icon: "📄"
        },
        {
            id: 3,
            title: "Verification Process",
            description: "Our team will visit and verify your charging point",
            icon: "✅"
        }
    ];

    return (
        <div className="member-container">
            <div className="member-header">
                <h2 className="member-title">
                    Become a Charging Point
                </h2>
                <p className="member-subtitle">
                    Join our network and start earning while helping EV drivers find reliable charging stations
                </p>
            </div>
            
            <div className="steps-container">
                <div className="steps-flow">
                    {steps.map((step, index) => (
                        <div key={step.id} className="step-wrapper">
                            <div className="step-circle">
                                <div className="step-icon">{step.icon}</div>
                                <div className="step-number">{step.id}</div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="connection-line"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="member-cta">
                <button className="join-button">
                    Join Now
                </button>
                <p className="cta-subtitle">
                    Start your journey as a charging point partner today
                </p>
            </div>
        </div>
    );
}