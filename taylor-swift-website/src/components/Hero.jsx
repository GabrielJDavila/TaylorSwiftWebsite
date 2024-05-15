
export default function Hero() {
    return (
        <div className="hero-section">
            <img src="../src/assets/images/tayswiftfront.png" className="hero-img"/>
            <div className="border-blend-el"></div>
            <img src="../src/assets/images/tayswiftside.png" className="hero-img"/>
            <div className="filler-container"></div>
            <div className="hero-text-container">
                <h1 className="hero-text hero-lg">THE TORTURED POETS DEPARTMENT</h1>
                <h1 className="hero-text hero-sm">Available Now</h1>
                <button className="hero-text hero-btn">STREAM / DOWNLOAD</button>
            </div>
        </div>
    )
}