import { useEffect, useState } from "react"

export default function Projects() {
    const [currentSong, setCurrentSong] = useState({
        title: ""
    })
    console.log(currentSong)
    // With this, I'm creating an array to simulate song data. I then create some state that uses Array() to
    // create a new array of states based on the length of songArr. Each state is false.
    const songArr = [
        "SONG 1",
        "SONG 2",
        "SONG 3",
        "SONG 4",
        "SONG 5",
        "SONG 6",
    ]
    const [playStates, setPlayStates] = useState(Array(songArr.length).fill(false))
    const [currentSongPlayState, setCurrentSongPlayState] = useState(false)
    console.log(currentSongPlayState)

    const currentSongStyles = {
        height: currentSongPlayState ? "218px" : "0px",
        padding: !currentSongPlayState && "0",
        overflow: !currentSongPlayState ? "hidden" : ""
    }
    
    // We then use this function to flip the state at the specific index that we are passing in.
    function togglePlayPauseButton(index) {
        setPlayStates(prevStates => {
            const newStates = Array(songArr.length).fill(false)
            newStates[index] = !prevStates[index]
            return newStates
        })
        setCurrentSong(prev => ({
            ...prev,
            title: songArr[index]
        }))
        if(!currentSongPlayState) {
            setCurrentSongPlayState(prev => !prev)
        }
    }

    // Iterating over songArr, we pass the index of each song into togglePlayPauseButton so that
    // way we can flip the state of each button independently.
    const renderedSongs = songArr.map((song, index) => {
        return (
        <div key={index} className="song-example">
            <p>{song}</p>
            {!playStates[index] ?
            <button onClick={() => togglePlayPauseButton(index)} className="projects-song-btn play">
                <img src="../src/assets/images/play.png"/>                            
            </button>
            :
            <button onClick={() => togglePlayPauseButton(index)} className="projects-song-btn pause">
                <img src="../src/assets/images/pause.png"/>
            </button>
            }
            <button className="projects-song-btn download">
                <img src="../src/assets/images/download.png"/>
            </button>
        </div>
        )
    })

    return (
        <div className="projects-page">
            {/* <div className="projects-page-background"></div> */}
            <img src="../src/assets/images/tayswiftfront.png" className="hero-img"/>
            <div className="border-blend-el"></div>
            <img src="../src/assets/images/tayswiftside.png" className="hero-img"/>
            <div className="opac-projects-background"></div>
            <div className="projects-container">
                <h1 className="projects-title">PROJECTS</h1>
                <div className="current-song" style={currentSongStyles}>
                    <div className="now-playing-container">
                        <p>NOW PLAYING</p>
                        <div className="now-playing-image-container">
                            <img src="../src/assets/images/previewImg.png"/>
                            <p>{currentSong.title}</p>
                        </div>
                    </div>
                    <div className="now-playing-btn-container">
                        <button className="projects-song-btn play-current"><img src="../src/assets/images/play.png"/></button>
                        <button className="projects-song-btn pause-current"><img src="../src/assets/images/pause.png"/></button>
                        <button className="projects-song-btn download-current"><img src="../src/assets/images/download.png"/></button>
                    </div>
                </div>
                <div className="song-list">
                    {renderedSongs}
                </div>
            </div>
        </div>
    )
}