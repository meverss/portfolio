const notes = document.querySelectorAll('.cuadro');
const video = document.querySelector('#pool_screening')

function triggerAnimation(entries){
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        obBoxes.unobserve(entry.target);
    }else{
        entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
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
    //root: null,
    // rootMargin: '-50px',
    threshold: .7
}

const obBoxes = new IntersectionObserver(triggerAnimation, options);
const obVideo = new IntersectionObserver(playVideo, options);

notes.forEach(note =>{
    obBoxes.observe(note);
})

obVideo.observe(video);

window.get