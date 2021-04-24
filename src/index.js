// import './sass/main.scss';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const pageBody = document.querySelector("body");
const themeSwitcher = document.getElementById("theme-switch-toggle");

themeSwitcher.addEventListener("change", e => {
    if (!themeSwitcher.checked) {
        pageBody.classList.remove(Theme.DARK);
        pageBody.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
        themeSwitcher.removeAttribute("checked");
    } else {
        pageBody.classList.remove(Theme.LIGHT);
        pageBody.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        themeSwitcher.setAttribute("checked", true);
    }
});

function checkTheme() {
    const userTheme = localStorage.getItem('theme');
    if (userTheme === Theme.DARK) {
        pageBody.classList.add(Theme.DARK);
        themeSwitcher.setAttribute("checked", true);
    } else {
        return;
    }
}
checkTheme();