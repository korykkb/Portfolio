
//scroll to blur top bar
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('blur');
    } else {
      header.classList.remove('blur');
    }
  });
  