const button = document.querySelector("button"),
	svgs = Array.from(button.querySelectorAll("svg"));

button.addEventListener("click", () => {
	svgs.map((svg) => svg.classList.toggle("display-none"));
});
