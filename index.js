document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("Nav");
navbar.style.position = "fixed";
  navbar.style.top = "0";
  navbar.style.width = "100%";
  navbar.style.zIndex = "1000"; }
);

document.addEventListener('click',function scrollToSection(id) {
  if (id === 'home') {
      // Scroll to the top of the page when 'Home' is clicked
      homePage.scrollTo({ top: 0, behavior: 'smooth' });

  } else {
      // Scroll to the respective section smoothly
      const section = document.querySelector(`.${id}`);
      if (section ) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }
});