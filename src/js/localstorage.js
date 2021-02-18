const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');

 localStorage.setItem('light', JSON.stringify(Theme.LIGHT));
 localStorage.setItem('dark', JSON.stringify(Theme.DARK));
const lightTheme = JSON.parse(localStorage.getItem('light'));
const darkTheme = JSON.parse(localStorage.getItem('dark'));
// const savedTheme = localStorage.setItem('themes', JSON.stringify(Theme));
// const theme = JSON.parse(localStorage.getItem("themes"));
// btnRef.addEventListener("change", a);
// addTheme()
// function a() {
//   if (localStorage.getItem('light') === null) {
//     addDarkTheme()
//   }
//   console.log(localStorage.getItem('light'));
// }
// console.log(localStorage.getItem('light'));
// addDarkTheme()
// addTheme();
if (true) {    
    
  addDarkTheme();
} else {
addLightTheme()
};

btnRef.addEventListener("change", addTheme);

function addTheme() {
  // bodyRef.classList.add(lightTheme);
console.log(bodyRef.className);

// addLightTheme();
  if (true) {    
    
    addDarkTheme();
  }
  addLightTheme()
}

function addDarkTheme() {

bodyRef.classList.toggle(darkTheme);
bodyRef.classList.remove(lightTheme);
// localStorage.removeItem('light');
btnRef.setAttribute('checked','');
// btnRef.checked === true; 
}

function addLightTheme() {
  
  bodyRef.classList.add(lightTheme);
  // localStorage.removeItem('dark');
  // btnRef.checked === false;
}
// 
// localStorage.removeItem('theme');
// export default { load, save };



// if (btnRef.className !== 'dark-theme') {
//   console.log('hhh');
//   bodyRef.classList.add(lightTheme);
// }

// btnRef.addEventListener("change", addTheme);
// function addTheme(event) {
//   // event.preventDefault();
  
//   bodyRef.classList.toggle(darkTheme);
  
//   if (bodyRef.className !== 'dark-theme') {
   
//     bodyRef.classList.toggle(lightTheme);
//   }
  // btnRef.setAttribute('checked','');
  // bodyRef.classList.add(darkTheme);
  // console.log(btnRef.checked);
// }








// 

// btnRef.checked === false? 
//   bodyRef.classList.add(lightTheme)
//   : bodyRef.classList.add(darkTheme);
// if (btnRef.checked === false) {
//   bodyRef.classList.add(lightTheme);
//   return
// }


// btnRef.checked = false;
// a ();
// btnRef.addEventListener("change",a);
// function a() {
//   if (btnRef.checked === false) {
//     bodyRef.classList.add(lightTheme);
//     return
//   }
//   bodyRef.classList.add(darkTheme);
//   btnRef.setAttribute('checked',true);
//   console.log(btnRef.checked);
// }
  

// addDarkTheme();

// addLightTheme()
// function addLightTheme() {
//   // bodyRef.classList.add(lightTheme);
//   if (bodyRef.className === 'dark-theme'){
//     return addDarkTheme();
    
//   }
  // bodyRef.classList.add(lightTheme);
// console.log(bodyRef.className);
// }
// bodyRef.classList.add(lightTheme);




// btnRef.addEventListener("change", addDarkTheme);

// function addDarkTheme() { 
//   // 
//   // 
//   bodyRef.classList.toggle(lightTheme);
//   bodyRef.classList.toggle(darkTheme);
//   if (bodyRef.className === 'dark-theme') {
//     btnRef.setAttribute('checked','');
//     // console.log(bodyRef.className);
//     btnRef.checked = true;
//     // bodyRef.checked = true;
//     return
//   }





  // console.log(bodyRef.className);
  // btnRef.checked = false;
  // btnRef.setAttribute('checked',true) 
  // bodyRef.className !== 'dark-theme'? 
  // btnRef.setAttribute('checked',true) 
  // : btnRef.removeAttribute('checked'); 
  
// }

// function labelPrevent(event) {
//   event.preventDefault();
// } 

// console.log(btnRef.checked);