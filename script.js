console.log('Welcome to Spotify');

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Kahaani - Pritam", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Chaand Baaliyan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Badshah - Coka Cola", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Bhool Bhulaiya 2 - Pritam", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Blue Eyes - Yo Yo Honey Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Namastute - Seedhe Maut", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Shatranj Ka Kamaal - ChessBase India", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Let Me love You - Justin Bieber", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Raabta - Arijit Singh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ishq Di Baajjiyan - Diljit Dosanjh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add('fa-circle-play');


    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");


    })

})