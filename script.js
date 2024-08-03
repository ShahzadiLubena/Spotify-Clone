// console.log('Lets write javascript');

// let currentAudio = null;
// let currentSongIndex = 0;
// let songs = []; // Array to hold the list of songs
// let currfolder;

// async function getSongs(folder) {
//     try {
//         currfolder=folder;
//         let response = await fetch(`http://100.115.92.206:5500/${folder}/`);
//         let text = await response.text();

//         let div = document.createElement("div");
//         div.innerHTML = text;
//         let as = div.getElementsByTagName("a");
//         songs = [];
//         for (let index = 0; index < as.length; index++) {
//             const element = as[index];
//             if (element.href.endsWith(".mp3")) {
//                 let songName = element.href.split(`/songs/`)[1];
//                 songs.push(songName);
//             }
//         }
//         return songs;
//     } catch (error) {
//         console.error('Error fetching songs:', error);
//         return [];
//     }
// }

// const playMusic = (track) => {
//     if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0; // Reset to the beginning
//     }

//     currentAudio = new Audio(`http://100.115.92.206:5500/songs/${track}`);
    
//     currentAudio.addEventListener('loadedmetadata', () => {
//         const duration = currentAudio.duration;
//         const formattedDuration = new Date(duration * 1000).toISOString().substr(14, 5); // Format as MM:SS
        
//         document.querySelector(".songinfo").innerHTML = track;
//         document.querySelector(".songtime").innerHTML = `00:00 / ${formattedDuration}`;
//         // Show all the songs in the playlist


//     });

//     currentAudio.addEventListener('timeupdate', () => {
//         const currentTime = currentAudio.currentTime;
//         const formattedCurrentTime = new Date(currentTime * 1000).toISOString().substr(14, 5); // Format as MM:SS
        
//         const duration = currentAudio.duration;
//         const formattedDuration = new Date(duration * 1000).toISOString().substr(14, 5); // Format as MM:SS

//         document.querySelector(".songtime").innerHTML = `${formattedCurrentTime} / ${formattedDuration}`;
        
//         // Update seekbar circle position
//         const seekbar = document.querySelector(".seekbar");
//         const circle = seekbar.querySelector(".circle");
//         const percentComplete = (currentTime / duration) * 100;
//         circle.style.left = `${percentComplete}%`;
//     });

//     currentAudio.play();
// }

// async function main() {
//     let currentSong;
//     // Get the list of all the songs
//      await getSongs("songs/ncs");
//     console.log(songs);
    
//     // Show all the songs in the playlist
//     let songUl = document.querySelector(".songlist ul");
//     for (const song of songs) {
//         songUl.innerHTML += `
//             <li>
//                 <img class="inverter" src="music.svg" alt="">
//                 <div class="info">
//                     <div>${song.replaceAll("%20", " ")}</div>
//                     <div>Artist</div>
//                 </div>
//                 <div class="playnow">
//                     <span>Play Now</span>
//                     <img class="inverter" src="play.svg" alt="">
//                 </div>
//             </li>`;
//     }
    
//     // Attach event listener to each song for play now functionality
//     Array.from(document.querySelectorAll(".songlist li")).forEach((e, index) => {
//         e.addEventListener("click", () => {
//             currentSongIndex = index;
//             const songName = e.querySelector(".info").firstElementChild.innerHTML.trim();
//             playMusic(songName);
//         });
//     });

//     // Event listener for play/pause button
//     const playButton = document.getElementById("play");
//     playButton.addEventListener("click", () => {
//         if (currentAudio.paused) {
//             currentAudio.play();
//             playButton.src = "pause.svg";
//         } else {
//             currentAudio.pause();
//             playButton.src = "play.svg";
//         }
//     });

//     // Event listener for next button
//     const nextButton = document.getElementById("next");
//     nextButton.addEventListener("click", () => {
//         currentSongIndex = (currentSongIndex + 1) % songs.length;
//         const nextSongName = songs[currentSongIndex];
//         playMusic(nextSongName);
//     });

//     // Event listener for previous button
//     const prevButton = document.getElementById("previous");
//     prevButton.addEventListener("click", () => {
//         currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//         const prevSongName = songs[currentSongIndex];
//         playMusic(prevSongName);
//     });

//     // Event listener for seekbar circle movement
//     const seekbar = document.querySelector(".seekbar");
//     const circle = seekbar.querySelector(".circle");
//     seekbar.addEventListener("click", (e) => {
//         const seekbarWidth = seekbar.clientWidth;
//         const clickPositionX = e.clientX - seekbar.getBoundingClientRect().left;
//         const percentClicked = (clickPositionX / seekbarWidth) * 100;
//         circle.style.left = `${percentClicked}%`;

//         // Update audio playback position
//         const duration = currentAudio.duration;
//         currentAudio.currentTime = (percentClicked / 100) * duration;
//     });

//     // Event listener for hamburger
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     });

//     // Event listener for closing the hamburger
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%";
//     });

//     // Volume control
//     const volumeControl = document.querySelector(".volume input[name='volume']");
//     volumeControl.addEventListener("input", (e) => {
//         const volume = e.target.value / 100;
//         if (currentAudio) {
//             currentAudio.volume = volume;
//         }
//     });

//     // Initialize volume control with default value
//     volumeControl.value = 50; // Set default volume to 50%
//     if (currentAudio) {
//         currentAudio.volume = 0.5;
//     }
//     // load the playlist ehen the card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach(e=>{
//         e.addEventListener("click", async item=>{
//             // console.log(item, item.currentTarget,dataset);
            
//            songs=await getSongs(`songs/${item.currentTarget.dataset.folder}`)
//         })
//     })
// }

// main();


   



console.log('Lets write javascript');

let currentAudio = null;
let currentSongIndex = 0;
let songs = []; // Array to hold the list of songs
let currfolder;

async function getSongs(folder) {
    try {
        currfolder = folder;
        let response = await fetch(`http://100.115.92.206:5500/${folder}/`);
        let text = await response.text();

        let div = document.createElement("div");
        div.innerHTML = text;
        let as = div.getElementsByTagName("a");
        songs = [];
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                let songName = element.href.split(`/${folder}/`)[1];
                songs.push(songName);
            }
        }
        return songs;
    } catch (error) {
        console.error('Error fetching songs:', error);
        return [];
    }
}

const playMusic = (track) => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the beginning
    }

    currentAudio = new Audio(`http://100.115.92.206:5500/${currfolder}/${track}`);
    
    currentAudio.addEventListener('loadedmetadata', () => {
        const duration = currentAudio.duration;
        const formattedDuration = new Date(duration * 1000).toISOString().substr(14, 5); // Format as MM:SS
        
        document.querySelector(".songinfo").innerHTML = track;
        document.querySelector(".songtime").innerHTML = `00:00 / ${formattedDuration}`;
    });

    currentAudio.addEventListener('timeupdate', () => {
        const currentTime = currentAudio.currentTime;
        const formattedCurrentTime = new Date(currentTime * 1000).toISOString().substr(14, 5); // Format as MM:SS
        
        const duration = currentAudio.duration;
        const formattedDuration = new Date(duration * 1000).toISOString().substr(14, 5); // Format as MM:SS

        document.querySelector(".songtime").innerHTML = `${formattedCurrentTime} / ${formattedDuration}`;
        
        // Update seekbar circle position
        const seekbar = document.querySelector(".seekbar");
        const circle = seekbar.querySelector(".circle");
        const percentComplete = (currentTime / duration) * 100;
        circle.style.left = `${percentComplete}%`;
    });

    currentAudio.play();
}

async function main() {
    // Attach event listener to each card
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            let folder = item.currentTarget.dataset.folder;
            songs = await getSongs(`songs/${folder}`);
            console.log(songs);

            // Show all the songs in the playlist
            let songUl = document.querySelector(".songlist ul");
            songUl.innerHTML = ''; // Clear the previous song list
            for (const song of songs) {
                songUl.innerHTML += `
                    <li>
                        <img class="inverter" src="music.svg" alt="">
                        <div class="info">
                            <div>${song.replaceAll("%20", " ")}</div>
                            <div>Artist</div>
                        </div>
                        <div class="playnow">
                            <span>Play Now</span>
                            <img class="inverter" src="play.svg" alt="">
                        </div>
                    </li>`;
            }
            
            // Attach event listener to each song for play now functionality
            Array.from(document.querySelectorAll(".songlist li")).forEach((e, index) => {
                e.addEventListener("click", () => {
                    currentSongIndex = index;
                    const songName = e.querySelector(".info").firstElementChild.innerHTML.trim();
                    playMusic(songName);
                });
            });
        });
    });

    // Event listener for play/pause button
    const playButton = document.getElementById("play");
    playButton.addEventListener("click", () => {
        if (currentAudio.paused) {
            currentAudio.play();
            playButton.src = "pause.svg";
        } else {
            currentAudio.pause();
            playButton.src = "play.svg";
        }
    });

    // Event listener for next button
    const nextButton = document.getElementById("next");
    nextButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        const nextSongName = songs[currentSongIndex];
        playMusic(nextSongName);
    });

    // Event listener for previous button
    const prevButton = document.getElementById("previous");
    prevButton.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        const prevSongName = songs[currentSongIndex];
        playMusic(prevSongName);
    });

    // Event listener for seekbar circle movement
    const seekbar = document.querySelector(".seekbar");
    const circle = seekbar.querySelector(".circle");
    seekbar.addEventListener("click", (e) => {
        const seekbarWidth = seekbar.clientWidth;
        const clickPositionX = e.clientX - seekbar.getBoundingClientRect().left;
        const percentClicked = (clickPositionX / seekbarWidth) * 100;
        circle.style.left = `${percentClicked}%`;

        // Update audio playback position
        const duration = currentAudio.duration;
        currentAudio.currentTime = (percentClicked / 100) * duration;
    });

    // Event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    // Event listener for closing the hamburger
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    // Volume control
    const volumeControl = document.querySelector(".volume input[name='volume']");
    volumeControl.addEventListener("input", (e) => {
        const volume = e.target.value / 100;
        if (currentAudio) {
            currentAudio.volume = volume;
        }
    });

    // Initialize volume control with default value
    volumeControl.value = 50; // Set default volume to 50%
    if (currentAudio) {
        currentAudio.volume = 0.5;
    }
}

main();
