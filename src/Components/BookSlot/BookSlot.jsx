import './bookslot.css'
import { useState } from 'react'

export default function BookSlot({ setSlot, pointName = '', pointPrice, pointImg, pointBaseAddress, pointAvailability = '', pointType = '' }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        duration: '1',
        vehicleType: '',
        vehicleModel: '',
        licensePlate: '',
        fullName: '',
        email: '',
        phone: '',
        specialRequests: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Auto close after 3 seconds
        setTimeout(() => {
            setSlot(false)
        }, 3000)
    }

    const formatPrice = (price) => {
        if (typeof price === 'number') {
            return `₹${price}/hour`
        }
        return price || 'Price not available'
    }

    return <div className="book-slot">
        <div className="book-overlay" onClick={() => setSlot(false)}></div>

        <div className="book-container">
            <div className="book-header">
                <h2>Book Your Charging Slot</h2>
                <button className="close-btn" onClick={() => setSlot(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            {!isSubmitted ? (
                <>
                    {/* Station Information Card */}
                    <div className="station-card">
                        <div className="station-image">
                            <img src={pointImg} alt={pointName} />
                            <div className="availability-badge">
                                <span className="status-dot"></span>
                                {pointAvailability || 'Available'}
                            </div>
                        </div>
                        <div className="station-details">
                            <h3>{pointName || 'EV Charging Station'}</h3>
                            <div className="station-info">
                                <div className="info-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    <span>{pointBaseAddress || 'Location not specified'}</span>
                                </div>
                                <div className="info-item">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
                                    </svg>
                                    <span>{pointType || 'Fast Charging'}</span>
                                </div>
                                <div className="price-tag">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>{formatPrice(pointPrice)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h4>Booking Details</h4>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time</label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Duration (hours)</label>
                                    <select
                                        id="duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="1">1 hour</option>
                                        <option value="2">2 hours</option>
                                        <option value="3">3 hours</option>
                                        <option value="4">4 hours</option>
                                        <option value="6">6 hours</option>
                                        <option value="8">8 hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h4>Vehicle Information</h4>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="vehicleType">Vehicle Type</label>
                                    <select
                                        id="vehicleType"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select vehicle type</option>
                                        <option value="car">Car</option>
                                        <option value="bike">Bike</option>
                                        <option value="scooter">Scooter</option>
                                        <option value="bus">Bus</option>
                                        <option value="truck">Truck</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="vehicleModel">Vehicle Model</label>
                                    <input
                                        type="text"
                                        id="vehicleModel"
                                        name="vehicleModel"
                                        value={formData.vehicleModel}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Tesla Model 3"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="licensePlate">License Plate</label>
                                    <input
                                        type="text"
                                        id="licensePlate"
                                        name="licensePlate"
                                        value={formData.licensePlate}
                                        onChange={handleInputChange}
                                        placeholder="e.g., MH01AB1234"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h4>Contact Information</h4>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h4>Additional Information</h4>
                            <div className="form-group">
                                <label htmlFor="specialRequests">Special Requests (Optional)</label>
                                <textarea
                                    id="specialRequests"
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleInputChange}
                                    placeholder="Any special requirements or notes..."
                                    rows="3"
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="button" className="cancel-btn" onClick={() => setSlot(false)}>
                                Cancel
                            </button>
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Booking...
                                    </>
                                ) : (
                                    'Book Slot'
                                )}
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <div className="success-message">
                    <div className="success-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3>Booking Confirmed!</h3>
                    <p>Your charging slot has been successfully booked. You will receive a confirmation email shortly.</p>
                    <div className="booking-summary">
                        <div className="summary-item">
                            <span>Station:</span>
                            <span>{pointName}</span>
                        </div>
                        <div className="summary-item">
                            <span>Date & Time:</span>
                            <span>{formData.date} at {formData.time}</span>
                        </div>
                        <div className="summary-item">
                            <span>Duration:</span>
                            <span>{formData.duration} hour(s)</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}