const preloader = document.getElementById("loadingContainer");
const form = document.getElementById("form");

hidePreloader();

function hidePreloader() {
  setTimeout(() => {
    preloader.style.display = 'block';
    preloader.style.display = 'none';
    form.classList.add('visible');
  }, 500)
}


const submitBtn = document.getElementById("submitButton");
const submitSucces = document.getElementById("submitSucces");
// console.log(submitBtn)
// console.log(submitSucces)


 

// submitBtn.addEventListener('click', () =>{
// preloader.style.display = 'none';
// submitSucces.style.display = 'block'
//   setTimeout(() => {
  
   
//     submitSucces.style.display = 'none'
// }, 2000)})
