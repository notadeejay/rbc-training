document.addEventListener('scroll', function () {
  if (document.body.scrollTop > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
