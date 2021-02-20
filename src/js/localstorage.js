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
};


btnRef.addEventListener("change", addTheme);

function addTheme() {
  localStorage.setItem('dark', JSON.stringify(Theme.DARK));
  bodyRef.classList.toggle(darkTheme);
  bodyRef.classList.toggle(lightTheme);
  console.log(bodyRef.className !== 'light-theme');
  if (bodyRef.className !== 'light-theme') {
    localStorage.removeItem('light');
    localStorage.setItem('dark', JSON.stringify(Theme.DARK));
    bodyRef.classList.toggle(darkTheme);
    // btnRef.setAttribute('checked','');
    // btnRef.checked = true;
  } else {
    localStorage.setItem('dark', JSON.stringify(Theme.DARK));
    localStorage.removeItem('dark');

  }
  // localStorage.setItem('dark', JSON.stringify(Theme.DARK));

  // bodyRef.classList.toggle(darkTheme);

  // if (!darkTheme) {
  //   console.log('ghhh');
  //   localStorage.setItem('dark', JSON.stringify(Theme.DARK));
  //   bodyRef.classList.toggle(darkTheme);
  //   bodyRef.classList.toggle(lightTheme);
  //   // btnRef.setAttribute('checked','');
  //   // btnRef.checked = true;
  //   localStorage.removeItem('light');

  // } else{
  //   localStorage.setItem('light', JSON.stringify(Theme.LIGHT));
  //   bodyRef.classList.toggle(lightTheme);
  //   localStorage.removeItem('dark');
  // };

}