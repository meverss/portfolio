const notes = document.querySelectorAll(".box");

function triggerAnimation(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add(
				"show",
				"animate__animated",
				"animate__fadeIn"
			);
			// obBoxes.unobserve(entry.target);
			entry.target.classList.remove(
				"hide",
				"animate__fadeOut"
			);
		} else {
			entry.target.classList.add(
				"show",
				"animate__fadeOut"
			);
			// obBoxes.unobserve(entry.target);
			entry.target.classList.remove(
				"hide",
				"animate__fadeIn"
			);
		}
	});
}

function playVideo(entries) {
	if (entries[0].isIntersecting) {
		video.classList.add("animate__animated", "animate__fadeIn");
		video.play();
		obVideo.unobserve(video);
	} else {
		video.classList.remove("animate__animated", "animate__fadeIn");
		video.pause();
	}
}

const options = {
	root: null,
	//rootMargin: "-180px",
	threshold: .5
};

const obBoxes = new IntersectionObserver(triggerAnimation, options);

notes.forEach((note) => {
	obBoxes.observe(note);
});
