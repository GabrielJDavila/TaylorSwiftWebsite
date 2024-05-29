import { useState, useEffect } from "react";

export default function SignUp() {

    const [FormData, setFormData] = useState({
        name: "",
        email: ""
    })
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        if(showMessage) {
            const flipMessageState = setTimeout(() => {
                setShowMessage(false)
            }, 3000)

            return () => clearTimeout(flipMessageState)
        }
    }, [showMessage])

    function handleChange(name, value) {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormData({
            name: "",
            email: ""
        })
        setShowMessage(prev => !prev)
    }

    const successMessage =
        <div className="success-message-container">
            <p className="success-message">Thanks for joining the Swift Army!</p>
        </div>
    return (
        <div className="signup-section">
            <img src="../src/assets/images/tayswiftfront.png" className="hero-img"/>
            <div className="border-blend-el"></div>
            <img src="../src/assets/images/tayswiftside.png" className="hero-img"/>
            <div className="opac-signup-background"></div>
            <form onSubmit={handleSubmit} className="signup-form">
                <h1 className="signup-form-title">SIGN UP</h1>
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        value={FormData.name}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        className="input-item"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        className="input-item"
                        placeholder="Email"
                    />
                </div>
                
                <button type="submit" className="signup-btn">SIGN UP</button>
            </form>
            {showMessage && successMessage}
        </div>
    )
}