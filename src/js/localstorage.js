const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');

const currentTheme = JSON.parse(localStorage.getItem("theme"));

if (currentTheme !== Theme.DARK) {  
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));     
} else{
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));  
  btnRef.checked = true;    
};
bodyRef.classList.add(currentTheme);
btnRef.addEventListener("change",addTheme);

function addTheme() {   
   bodyRef.classList.remove(JSON.parse(localStorage.getItem("theme")));   
    
  if (btnRef.checked === true) {    
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));    
    bodyRef.classList.add(JSON.parse(localStorage.getItem("theme")));    
    return
  } else {    
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));    
    bodyRef.classList.add(JSON.parse(localStorage.getItem("theme")));    
  }   
}


// if (bodyRef.className !== Theme.LIGHT) {    
  //   localStorage.setItem('theme', JSON.stringify(Theme.DARK)); 
  //   console.log('4');  
   
  // } 

  // if (bodyRef.className !== Theme.DARK) {    
  //   localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  //   console.log('5');
    
  // }   
 
  // bodyRef.classList.toggle(currentTheme);  