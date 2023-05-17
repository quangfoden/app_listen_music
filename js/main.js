let currentMusic = 0;
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
//tang giảm nhạc
seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

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
    closeLisst.style.display = 'block';
    openLisst.style.display = 'none';
    lists.style.display = 'block';
})
closeLisst.addEventListener('click', () => {
    closeLisst.style.display = 'none';
    openLisst.style.display = 'block';
    lists.style.display = 'none';
})
// chọn nhạc
const laanh = document.querySelector('.laanh');
laanh.addEventListener('click', () => {
    setMusic(0);
    playMusic(currentMusic);
})

const WaitingForYou = document.querySelector('.wayting');
WaitingForYou.addEventListener('click', () => {
    setMusic(1);
    playMusic(currentMusic);
})
const battinhyeulen = document.querySelector('.battinhyeulen');
battinhyeulen.addEventListener('click', () => {
    setMusic(2);
    playMusic(currentMusic);
})
const muonnoivoiem = document.querySelector('.muonnoivoiem');
muonnoivoiem.addEventListener('click', () => {
    setMusic(3);
    playMusic(currentMusic);
})
const cogaivotchong = document.querySelector('.cogaivotchong');
cogaivotchong.addEventListener('click', () => {
    setMusic(4);
    playMusic(currentMusic);
})
const cogaimoduong = document.querySelector('.cogaimoduong');
cogaimoduong.addEventListener('click', () => {
    setMusic(5);
    playMusic(currentMusic);
})
const chieckhanphieu = document.querySelector('.chieckhanphieu');
chieckhanphieu.addEventListener('click', () => {
    setMusic(6);
    playMusic(currentMusic);
})


//đổi giao diện
const theme = document.querySelector('.theme');
const bg = document.querySelector('body');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const theme4 = document.querySelector('.theme4');
const color_text = document.querySelector('.container .music-name');
const color_text2 = document.querySelector('.container .artist-name');


theme.addEventListener('click', () => {
    theme.classList.toggle('theme-1-2');
});
theme1.addEventListener('click', () => {
    bg.style.backgroundImage = 'url("images/bg-body4.jpg")'
});
theme2.addEventListener('click', () => {
    bg.style.backgroundImage = 'url("images/bg-body3.jpg")';
    color_text.style.color = "red";
    color_text2.style.color = "red";
});
theme3.addEventListener('click', () => {
    bg.style.backgroundImage = 'url("images/bg-body6.jpg")'
    color_text.style.color = "pink";
    color_text2.style.color = "pink";
});
theme4.addEventListener('click', () => {
    bg.style.backgroundImage = 'url("images/bg-body5.jpg")'
    color_text.style.color = "white";
    color_text2.style.color = "white";
});



