const preloader = document.getElementById("loadingContainer");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submitButton");
const submitSucces = document.getElementById("submitSucces");
const submitFail = document.getElementById("submitFail");

const urlAPI = 'https://jeugdzorg.api.fdnd.nl/v1/competentie';

hidePreloader();
clientSidePost();

function hidePreloader() {
  preloader.style.display = 'block';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000)
}




function clientSidePost(){
// Client-side post with formData

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  // const resource = new URL(form.action || window.location.href);
  const formData = new FormData(form);

  const options = {
    method: form.method || "get",
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
    }
  };

  if (options.method === "get") {
    // resource.search = new URLSearchParams(formData);
  } else {
    if (form.enctype === "multipart/form-data") {
      options.body = formData;
    } else {
      options.body = JSON.stringify(Object.fromEntries(formData));
      options.headers['Content-Type'] = 'application/json';
    }
  }

  const r = await fetch(urlAPI, options);

  if (!r.ok) {
    console.log("nee")
    submitFail.style.display = 'block'
    setTimeout(() => {
      submitFail.style.display = 'none'
    }, 2000)
    return;
  }


  submitSucces.style.display = 'block'
  setTimeout(() => {
    submitSucces.style.display = 'none'
  }, 2000)

});
}