console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('S5/M (1).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let S5 = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "S5/M (1).mp3", coverPath: "covers/1.png"},
    {songName: "Cielo - Huma-Huma", filePath: "S5/M (2).mp3", coverPath: "covers/2.png"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "S5/M (3).mp3", coverPath: "covers/3.png"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "S5/M (4).mp3", coverPath: "covers/4.png"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "S5/M (5).mp3", coverPath: "covers/5.png"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "S5/M (6).mp3", coverPath: "covers/6.png"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "S5/M (7).mp3", coverPath: "covers/7.png"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "S5/M (8).mp3", coverPath: "covers/8.png"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "S5/M (9).mp3", coverPath: "covers/9.png"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "S5/M (10).mp3", coverPath: "covers/10.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = S5[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = S5[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `S5/${songIndex+1}.mp3`;
        masterSongName.innerText = S5[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `S5/${songIndex+1}.mp3`;
    masterSongName.innerText = S5[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `S5/${songIndex+1}.mp3`;
    masterSongName.innerText = S5[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})