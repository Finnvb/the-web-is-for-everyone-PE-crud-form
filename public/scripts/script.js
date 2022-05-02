const preloader = document.querySelector(".loadingContainer");
const form = document.querySelector(".notVisible");
preloader.classList.toggle("preloaderEnabled");


hidePreloader();

function hidePreloader() {
  setTimeout(() => {
    preloader.style.display = 'block';
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
    form.classList.add('visible');
  }, 001)
}

