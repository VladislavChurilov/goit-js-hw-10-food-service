const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');

const lightTheme = JSON.parse(localStorage.getItem('light'));
const darkTheme = JSON.parse(localStorage.getItem('dark'));
// localStorage.setItem('themes', JSON.stringify(Theme));
// const theme = JSON.parse(localStorage.getItem("Theme"));

bodyRef.classList.remove(lightTheme);
bodyRef.classList.remove(darkTheme);

if (!darkTheme) {  
  localStorage.setItem('light', JSON.stringify(Theme.LIGHT));
  bodyRef.classList.add(lightTheme);
} else{
  localStorage.setItem('dark', JSON.stringify(Theme.DARK));
  bodyRef.classList.add(darkTheme);
  btnRef.checked = true;
};

btnRef.addEventListener("change", addTheme);

function addTheme() {
  bodyRef.classList.toggle(lightTheme);
  bodyRef.className === 'light-theme'? 
  localStorage.setItem('light', JSON.stringify(Theme.LIGHT))
  :localStorage.setItem('dark', JSON.stringify(Theme.DARK));
  bodyRef.classList.add(darkTheme);
  bodyRef.classList.toggle(darkTheme);
  if (bodyRef.className === 'light-theme') {
    localStorage.removeItem('dark');
    return
  } else{
    localStorage.setItem('dark', JSON.stringify(Theme.DARK))
  bodyRef.classList.add(darkTheme);
  }
}