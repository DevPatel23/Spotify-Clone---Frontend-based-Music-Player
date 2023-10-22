console.log("Hello Dev");

// Initialize the Variables
let songIndex = 0; /* kyu song plasy thay 6e te khbr pade initially=0 */
let audioElement = new Audio("/My clone/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gifImg = document.getElementById("gif");
// let gifImg9 = document.getElementById('gif9');          /*aa to hu extra karva jato hato.. */
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
  {
    songName: "Baller",
    filePath: "/My clone/songs/1.mp3",
    songCover: "/My clone/covers/1.jpg",
  },
  {
    songName: "def",
    filePath: "/My clone/songs/2.mp3",
    songCover: "/My clone/covers/2.jpg",
  },
  {
    songName: "ghi",
    filePath: "/My clone/songs/3.mp3",
    songCover: "/My clone/covers/3.jpg",
  },
  {
    songName: "jkl",
    filePath: "/My clone/songs/4.mp3",
    songCover: "/My clone/covers/4.jpg",
  },
  {
    songName: "mnop",
    filePath: "/My clone/songs/5.mp3",
    songCover: "/My clone/covers/5.jpg",
  },
  {
    songName: "qrst",
    filePath: "/My clone/songs/6.mp3",
    songCover: "/My clone/covers/6.jpg",
  },
  {
    songName: "12345678",
    filePath: "/My clone/songs/7.mp3",
    songCover: "/My clone/covers/7.jpg",
  },
  {
    songName: "xyz",
    filePath: "/My clone/songs/8.mp3",
    songCover: "/My clone/covers/8.jpg",
  },
  {
    songName: "123",
    filePath: "/My clone/songs/9.mp3",
    songCover: "/My clone/covers/9.jpg",
  },
  {
    songName: "uvw",
    filePath: "/My clone/songs/10.mp3",
    songCover: "/My clone/covers/10.jpg",
  },
];

songItem.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].songCover;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gifImg.style.opacity = 1;
    // gifImg9.style.opacity = 1;           /**nathi kaam nu */
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gifImg.style.opacity = 0;
    makeAllPlays();
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate');

  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// const makeAllPlays = () =>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
//             element.classList.remove('fa-circle-pause');
//             element.classList.add('fa-circle-play');
//         });
// }

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);

      songIndex = parseInt(e.target.id);

      makeAllPlays();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");

      audioElement.src = `/My clone/songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();

      masterSongName.innerText = songs[songIndex].songName;
      gifImg.style.opacity = 1;

      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `/My clone/songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  masterSongName.innerText = songs[songIndex].songName;
  gifImg.style.opacity = 1;
  makeAllPlays();

  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `/My clone/songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  masterSongName.innerText = songs[songIndex].songName;
  gifImg.style.opacity = 1;
  makeAllPlays();

  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
