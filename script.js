console.log("let's start writing javascript in this spotify project");
let songIndex=1;
let myProgressBar =document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio('songs/1.mp3');
let gif=document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "let me love you", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Avengers", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "let me love you", filePath: "songs/8.mp3", coverPath: "covers/6.jpg"},
]

songItems.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
    console.log(Element);
})



// --------------------------------------------------------------------
// handle play/pause button

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

// Add Event Listener
audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    // console.log(audioElement.currentTime);
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100000);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100000;
})
// audioElement.play()

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element) =>{
        Element.classList.remove("fa-pause-circle");
        Element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element) =>{
    Element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");     
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        document.getElementById("gifSongName").innerText=songs[songIndex-1].songName;
        audioElement.play();  
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=8)
    {
        songIndex =0;
    }
    else{
        songIndex +=1;
    }
    
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    document.getElementById("gifSongName").innerText=songs[songIndex-1].songName;
    audioElement.play();  
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})

document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0)
    {
        songIndex =8;
    }
    else{
        songIndex -=1;
    }
    
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    document.getElementById("gifSongName").innerText=songs[songIndex-1].songName;
    audioElement.play();  
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})