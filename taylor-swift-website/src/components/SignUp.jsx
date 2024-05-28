import { useState } from "react";

export default function SignUp() {

    const [FormData, setFormData] = useState({
        name: "",
        email: ""
    })

    function handleChange(name, value) {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(FormData)
    return (
        <div className="signup-page">
            <img src="../src/assets/images/tayswiftfront.png" className="hero-img"/>
            <div className="border-blend-el"></div>
            <img src="../src/assets/images/tayswiftside.png" className="hero-img"/>
            <div className="opac-signup-background"></div>
            <form className="signup-form">
                <h1>Sign Up</h1>
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        value={FormData.name}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        placeholder="Email"
                    />
                </div>
                
                <button className="signup-btn">Join the Swift Army</button>
            </form>
        </div>
    )
}