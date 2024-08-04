function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const bodyEl = document.body;
const barEl = document.querySelector('.bar');
const updateBar = () => {
    let scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight))100;
    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);
};
updateBar();