import { useEffect, useState } from "react"

export default function Projects() {
    const [currentSong, setCurrentSong] = useState({
        title: ""
    })
    return (
        <div className="projects-container">
            <h1>PROJECTS</h1>
            <div className="current-song">
                <div className="now-playing-container">
                    <p>NOW PLAYING</p>
                    <div className="now-playing-image-container">
                        <img src="../src/assets/images/previewImg.png"/>
                        <p>SONG 1</p>
                    </div>
                </div>
                <div className="now-playing-btn-container">
                    <button><img src="../src/assets/images/play.png"/></button>
                    <button><img src="../src/assets/images/pause.png"/></button>
                    <button><img src="../src/assets/images/download.png"/></button>
                </div>
            </div>
            <div className="song-list">
                <div className="song-example">
                    <p>SONG 1</p>
                    <button className="projects-song-btn play">
                        <img src="../src/assets/images/play.png"/>
                    </button>
                </div>
                <div className="song-example">
                    <button className="projects-song-btn pause">
                        <img src="../src/assets/images/pause.png"/>
                    </button>
                </div>
                <div className="song-example">
                    <button className="projects-song-btn download">
                        <img src="../src/assets/images/download.png"/>
                    </button>
                </div>
            </div>
        </div>
    )
}