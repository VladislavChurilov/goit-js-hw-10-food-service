const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');

const currentTheme = JSON.parse(localStorage.getItem("theme"));

bodyRef.classList.remove(currentTheme);

if (currentTheme !== 'dark-theme') {  
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));    
} else{
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));  
  btnRef.checked = true;  
};
bodyRef.classList.add(currentTheme);
btnRef.addEventListener("change",addTheme);

function addTheme() {   
  if (bodyRef.className !== 'light-theme') {
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));    
// return
  } 
bodyRef.classList.toggle(currentTheme);
  if (bodyRef.className !== 'dark-theme') {
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT))
// return
  }   
  if (btnRef.checked === true) {
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    // return
  }  
}
