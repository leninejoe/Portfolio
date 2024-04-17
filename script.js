                              // Reload to Top always
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Optional: smooth scrolling effect
//   });
// }

// // Scroll to top when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', scrollToTop);

// // Scroll to top when the page is fully loaded
// window.addEventListener('load', scrollToTop);

                                // responsive menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

                            // Change Theme

function toggleTheme() {
  const body = document.getElementById('body'); 
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  if (isDarkMode) {
      body.style.backgroundColor = "#333";

      const B1_elements = document.querySelectorAll('#Btn2_theme');
      B1_elements.forEach(element => {
          element.style.border = "white 2px solid"
          element.style.color = "white"
      });

      document.getElementById('Btn1_theme').style.border = "white 2px solid"
      document.getElementById('Btn1_theme').style.backgroundColor = "white"
      document.getElementById('Btn1_theme').style.color = "black"

      const I_elements = document.querySelectorAll('#i_D_theme');
      I_elements.forEach(element => {
          element.style.transform = "rotate(270deg)"
          element.style.color = "white"
      });

      const D_elements = document.querySelectorAll('.details-container');
      D_elements.forEach(element => {
          element.style.backgroundColor = "#737373"
          element.style.border = 'none'
      });

      const elements = document.querySelectorAll('#A_theme');
      elements.forEach(element => {
          element.style.color = 'white';
      });

      const B_elements = document.querySelectorAll('#B_theme')
      B_elements.forEach(element => {
        element.style.color = '#f2f2f2';
      });

      const C_elements = document.querySelectorAll('#C_theme')
      C_elements.forEach(element => {
        element.style.color = '#e6e6e6';
      });

      const Delements = document.querySelectorAll('#D_theme')
      Delements.forEach(element => {
        element.style.color = '#d9d9d9';
      });

      const img_elements = document.querySelectorAll('.icon');
      img_elements.forEach(element => {
          element.style.filter = 'invert(100%)';
      });
      
  } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";



      const B1_elements = document.querySelectorAll('#Btn2_theme');
      B1_elements.forEach(element => {
          element.style.border = "rgb(53,53,53) 0.1rem solid"
          element.style.color = "black"
      });

      document.getElementById('Btn1_theme').style.border = "#353535 0.1rem solid"
      document.getElementById('Btn1_theme').style.backgroundColor = ""
      document.getElementById('Btn1_theme').style.color = ""

      const I_elements = document.querySelectorAll('#i_D_theme');
      I_elements.forEach(element => {
          element.style.transform = "rotate(0deg)"
          element.style.color = "black"
      });

      const el_elements = document.querySelectorAll('#A_theme')
      el_elements.forEach(element => {
        element.style.color = 'black';
      });

      const el_B_elements = document.querySelectorAll('#B_theme')
      el_B_elements.forEach(element => {
        element.style.color = 'black';
      });

      const C_elements = document.querySelectorAll('#C_theme')
      C_elements.forEach(element => {
        element.style.color = 'black';
      });

      const Delements = document.querySelectorAll('#D_theme')
      Delements.forEach(element => {
        element.style.color = '#555555';
      });

      const img_elements = document.querySelectorAll('.icon');
      img_elements.forEach(element => {
          element.style.filter = 'invert(0%)';
      });

      const D_elements = document.querySelectorAll('.details-container');
      D_elements.forEach(element => {
          element.style.backgroundColor = "white"
          element.style.border = 'grey 0.1rem solid'
      });
  }
}