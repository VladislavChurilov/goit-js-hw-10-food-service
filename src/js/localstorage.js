const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch__toggle');
// console.log(btnRef);
// console.log(bodyRef);
//   console.log(Theme);
bodyRef.classList.add(Theme.LIGHT);
btnRef.addEventListener("change",event =>  {
  // console.log(event.currentTarget);
  bodyRef.classList.toggle(Theme.DARK);
  const savedStorage = localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  console.log(savedStorage);
});

//  const savedStorage = localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
// //  const parsedStorage = JSON.parse(savedStorage);
// 
// // console.log(btnRef);
// const a = localStorage.getItem('Theme.DARK');
// console.log(Theme.DARK);
// // console.log(savedStorage);

// // // console.log(bodyRef);
// // function changeTheme (event){
// // if (btnRef.addEventListener("change")){}
// // }
// bodyRef.classList.add('light-theme');    
// btnRef.addEventListener("change",event =>  {
//     bodyRef.classList.toggle('dark-theme');
//     // bodyRef.classList.remove('light-theme'); 
// });




// var checkBox = document.getElementById('cb');

// var theme = window.localStorage.getItem('data-theme');
// if(theme) document.documentElement.setAttribute('data-theme', theme);
// checkBox.checked = theme == 'dark-theme' ? true : false;

// checkBox.addEventListener('change', function () {
//   if(this.checked){
//     document.documentElement.setAttribute('data-theme', 'dark-theme');
//     window.localStorage.setItem('data-theme', 'dark-theme');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light-theme');
//     window.localStorage.setItem('data-theme', 'light-theme');
//   }
// });

// console.log('dfdf');
// }

// console.log(createStorage);
// console.log(Theme);
