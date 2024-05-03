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