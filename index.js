"use strict";

const faders = document.querySelectorAll(".fadein");
const sliders = document.querySelectorAll(".slide");

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		console.log(entry.target);
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
});

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
	appearOnScroll.observe(slider);
});
