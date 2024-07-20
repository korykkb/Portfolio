//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//scroll to blur top bar
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});
/*
window.addEventListener('scroll', function() {
  const sidebar = document.querySelector('.sidebar');
  if (window.scrollY > 0) {
    sidebar.classList.add('blur');
  } else {
    sidebar.classList.remove('blur');
  }
});  
*/
  
//click bars to open sidebar  
const barsIcon = document.querySelector('.js-bars');

barsIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
  });

//click x to close sidebar

const xIcon = document.querySelector('.js-x');

xIcon.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
});

//dark mode toggle

const toggle = document.querySelector("#darkmode-toggle");

toggle.addEventListener("click", () => toggle.classList.toggle("active"));

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  document.body.classList.add("dark-mode");
  toggle.classList.add("active");
}

//need to activate input:checked css

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (!document.body.classList.contains("dark-mode")) {
    return localStorage.setItem("mode", "light") 
  }
  localStorage.setItem("mode", "dark-mode");
})






/*
const themeToggleInput = document.querySelector('#darkmode-toggle');

const theme = localStorage.getItem('theme');

if (theme) {
  document.body.classList.add('dark-mode');
}


themeToggleInput.addEventListener('click', () => {
  themeToggleInput.classList.toggle("active");
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  };
  
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
})

*/






