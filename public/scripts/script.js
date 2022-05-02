const preloader = document.querySelector(".loadingContainer");
const form = document.querySelector(".notVisible");


hidePreloader();

function hidePreloader() {
  setTimeout(() => {
    preloader.style.display = 'block';
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
    form.classList.add('visible');
  }, 1500)
}


const submitBtn = document.querySelector('#submitButton');
const submitSucces = document.querySelector('.submitSucces');
// console.log(submitBtn)
// console.log(submitSucces)


 

// submitBtn.addEventListener('click', () =>{
// preloader.style.display = 'none';
// submitSucces.style.display = 'block'
//   setTimeout(() => {
  
   
//     submitSucces.style.display = 'none'
// }, 2000)})
