const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
//   console.log(Theme);
 const savedStorage = localStorage.setItem('Theme', JSON.stringify(Theme));
//  const parsedStorage = JSON.parse(savedStorage);
const btnRef = document.querySelector('.theme-switch__toggle');
// console.log(btnRef);

const bodyRef = document.querySelector('body');
// // console.log(bodyRef);
// function changeTheme (event){
// if (btnRef.addEventListener("change")){}
// }
bodyRef.classList.add('light-theme');    
btnRef.addEventListener("change",event =>  {
    bodyRef.classList.toggle('dark-theme');
    // bodyRef.classList.remove('light-theme'); 
});


// console.log('dfdf');
// }

// console.log(createStorage);
// console.log(Theme);
