// import './sass/main.scss';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const pageBody = document.querySelector("body");
console.log(pageBody);
const themeSwitcher = document.getElementById("theme-switch-toggle");
console.log(themeSwitcher);

// const themeSwitcher 
//  if(this.checked!=true)

     
const themeChange = function () {
    themeSwitcher.addEventListener("change", e => {
        if (themeSwitcher.checked) {
            pageBody.classList.remove(Theme.LIGHT);
            pageBody.classList.add(Theme.DARK);
            themeSwitcher.setAttribute("checked", true);
        } else {
            pageBody.classList.remove(Theme.DARK);
            pageBody.classList.add(Theme.LIGHT);
            themeSwitcher.setAttribute("checked", false);
        }
    })
};

themeChange();
// var chbox;
// chbox=document.getElementById('one');
// 	if (chbox.checked) {
// 		alert('Выбран');
// 	}
// 	else {
// 		alert ('Не выбран');
// 	}
// }

// themeSwitcher.addEventListener("change", e => {
//     pageBody.classList.toggle(Theme.DARK);
// });