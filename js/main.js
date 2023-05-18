let currentMusic = 0;
// const timeStep = 1000;  //khoảng thời gian tăng giảm
const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const fowardBtn = document.querySelector('.btn-forward');
const backwarddBtn = document.querySelector('.btn-backward');


playBtn.addEventListener('click', () => {
    // console.log('Play');
    if (playBtn.className.includes('pause')) {
        music.play();
    }
    else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

const setMusic = (i) => {
    seekBar.value = 0;
    let song = musics[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 3000)

}

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500)
//tang giảm thời gian nhạc
seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})
// window.addEventListener('keyup', function (e) {

//     if (e.key == 'ArrowUp') {
//         console.log('right arrow')
//         seekBar.value += "10000";
//         music.currentTime = seekBar.value;
//     };
// })

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
};

fowardBtn.addEventListener('click', () => {
    if (currentMusic >= musics.length - 1) {
        currentMusic = 0
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})
backwarddBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = musics.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})


//thêm chức năng toàn màn hình
var enterFullscreenButton = document.getElementById('enter-fullscreen-button');
var exitFullscreenButton = document.getElementById('exit-fullscreen-button');

enterFullscreenButton.addEventListener('click', function () {
    var element = document.documentElement; // Phần tử toàn bộ trang web
    enterFullscreenButton.style.display = 'none';
    exitFullscreenButton.style.display = 'block';
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Internet Explorer/Edge
        element.msRequestFullscreen();
    }
});

exitFullscreenButton.addEventListener('click', function () {
    enterFullscreenButton.style.display = 'block';
    exitFullscreenButton.style.display = 'none';
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // Internet Explorer/Edge
        document.msExitFullscreen();
    }
});


//list danh sách nhạc
const list_musics = document.querySelector('.list-music');
const lists = document.querySelector('.list');
const openLisst = document.querySelector('.fa-bars');
const closeLisst = document.querySelector('.fa-close');
openLisst.addEventListener('click', () => {
    theme.style.display = 'none';
    closeLisst.style.display = 'block';
    openLisst.style.display = 'none';
    lists.style.display = 'block';
})
closeLisst.addEventListener('click', () => {
    theme.style.display = 'block';
    closeLisst.style.display = 'none';
    openLisst.style.display = 'block';
    lists.style.display = 'none';
})
// chọn nhạc
const wayting = document.querySelector('.wayting');
wayting.addEventListener('click', () => {
    setMusic(0);
    playMusic(currentMusic);
})

const htca = document.querySelector('.htca');
htca.addEventListener('click', () => {
    setMusic(1);
    playMusic(currentMusic);
})
const ecnhq = document.querySelector('.ecnhq');
ecnhq.addEventListener('click', () => {
    setMusic(2);
    playMusic(currentMusic);
})
const naxd = document.querySelector('.naxd');
naxd.addEventListener('click', () => {
    setMusic(3);
    playMusic(currentMusic);
})
const upgrade = document.querySelector('.upgrade');
upgrade.addEventListener('click', () => {
    setMusic(4);
    playMusic(currentMusic);
})
const nnhq = document.querySelector('.nnhq');
nnhq.addEventListener('click', () => {
    setMusic(5);
    playMusic(currentMusic);
})
const ctvt = document.querySelector('.ctvt');
ctvt.addEventListener('click', () => {
    setMusic(6);
    playMusic(currentMusic);
})
const ggyd = document.querySelector('.ggyd');
ggyd.addEventListener('click', () => {
    setMusic(7);
    playMusic(currentMusic);
})
const hrkndd = document.querySelector('.hrkndd');
hrkndd.addEventListener('click', () => {
    setMusic(8);
    playMusic(currentMusic);
})

const vonguoita = document.querySelector('.vonguoita');
vonguoita.addEventListener('click', () => {
    setMusic(9);
    playMusic(currentMusic);
})
const laanh = document.querySelector('.laanh');
laanh.addEventListener('click', () => {
    setMusic(10);
    playMusic(currentMusic);
})
const mnve = document.querySelector('.mnve');
mnve.addEventListener('click', () => {
    setMusic(11);
    playMusic(currentMusic);
})
const cgmd = document.querySelector('.cgmd');
cgmd.addEventListener('click', () => {
    setMusic(12);
    playMusic(currentMusic);
})
const cgvc = document.querySelector('.cgvc');
cgvc.addEventListener('click', () => {
    setMusic(13);
    playMusic(currentMusic);
})
const btyl = document.querySelector('.btyl');
btyl.addEventListener('click', () => {
    setMusic(14);
    playMusic(currentMusic);
})
// let selectMusic = document.querySelector('.list li');
// selectMusic = musics[i];




//đổi giao diện
// const theme = document.querySelector('.theme');
// const bg = document.querySelector('body');
// const theme1 = document.querySelector('.theme1');
// const theme2 = document.querySelector('.theme2');
// const theme3 = document.querySelector('.theme3');
// const theme4 = document.querySelector('.theme4');
// const color_text = document.querySelector('.container .music-name');
// const color_text2 = document.querySelector('.container .artist-name');


// theme.addEventListener('click', () => {
//     theme.classList.toggle('theme-1-2');
// });
// theme1.addEventListener('click', () => {
//     bg.style.backgroundImage = 'url("images/bg-body4.jpg")'
//     color_text.style.color = "rgba(25, 0, 255, 0.719)";
//     color_text2.style.color = "rgba(25, 0, 255, 0.719)";
// });
// theme2.addEventListener('click', () => {
//     bg.style.backgroundImage = 'url("images/bg-body3.jpg")';
//     color_text.style.color = "red";
//     color_text2.style.color = "red";
// });
// theme3.addEventListener('click', () => {
//     bg.style.backgroundImage = 'url("images/bg-body6.jpg")'
//     color_text.style.color = "pink";
//     color_text2.style.color = "pink";
// });
// theme4.addEventListener('click', () => {
//     bg.style.backgroundImage = 'url("images/bg-body5.jpg")'
//     color_text.style.color = "white";
//     color_text2.style.color = "white";
// });

const video = document.querySelector('.test video');
const theme = document.querySelector('.theme');
const bg = document.querySelector('body');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const color_text = document.querySelector('.container .music-name');
const color_text2 = document.querySelector('.container .artist-name');
theme.addEventListener('click', () => {
    theme.classList.toggle('theme-1-2');

});
theme1.addEventListener('click', () => {
    video.src = 'video/cat2.mp4';
    color_text.style.color = "#FF33CC";
    color_text2.style.color = "#FF33CC";
});
theme2.addEventListener('click', () => {
    video.src = 'video/cat3.mp4';
    color_text.style.color = "#EEEEEE";
    color_text2.style.color = "#EEEEEE";
});
theme3.addEventListener('click', () => {
    video.src = 'video/cat5.mp4';
    color_text.style.color = "pink";
    color_text2.style.color = "pink";
});





