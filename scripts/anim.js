const notes = document.querySelectorAll('.box');
// const video = document.querySelector('#pool_screening')

function triggerAnimation(entries){
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        entry.target.classList.add('show', 'animate__animated', 'animate__bounceIn');
        obBoxes.unobserve(entry.target);
    }else{
        entry.target.classList.remove('animate__animated', 'animate__bounceIn');
    }
  })  
}

function playVideo(entries){
    if (entries[0].isIntersecting){
        video.classList.add('animate__animated', 'animate__bounceIn');
        video.play();
        obVideo.unobserve(video);
    } else {
        video.classList.remove('animate__animated', 'animate__bounceIn');
        video.pause();
    }
}

const options={
    root: null,
    rootMargin: '-170px',
    //threshold: .2
}

const obBoxes = new IntersectionObserver(triggerAnimation, options);
// const obVideo = new IntersectionObserver(playVideo, options);

notes.forEach(note =>{
    obBoxes.observe(note);
})

// obVideo.observe(video);

