import { useEffect, useState } from "react"

export default function Project() {
    const [currentSong, setCurrentSong] = useState({
        title: ""
    })
    return (
        <div className="projects-container">
            <h1>PROJECTS</h1>
            <div className="current-song">

            </div>
            <div className="song-list">
                <div className="song-example">
                    <p>SONG 1</p>
                </div>
            </div>
        </div>
    )
}