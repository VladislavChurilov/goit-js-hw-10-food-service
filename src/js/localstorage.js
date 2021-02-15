const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');

const savedLight = localStorage.setItem('light', JSON.stringify(Theme.LIGHT));
const savedDark = localStorage.setItem('dark', JSON.stringify(Theme.DARK));
const lightTheme = JSON.parse(localStorage.getItem('light'));

bodyRef.classList.add(lightTheme);
btnRef.addEventListener("change", addDarkTheme);


function addDarkTheme() { 
  bodyRef.classList.toggle(lightTheme);
  bodyRef.classList.toggle(JSON.parse(localStorage.getItem('dark')));
  bodyRef.classList != lightTheme? btnRef.setAttribute('checked','') : btnRef.removeAttribute('checked','');      
}
// function labelPrevent(event) {
//   event.preventDefault();
// } 

