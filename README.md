# Reflect For Effect PE crud Form
Dit project is een crud form waarmee je nieuwe competenties kunt toevoegen aan de jeugdzorg API. Door middel van Progressive Enhancement werkt deze form ook op oudere browsers. 

<img width="500" alt="formImage" src="https://user-images.githubusercontent.com/26089533/166312667-ec5faebd-9b8f-4e91-a891-0c7b21199b6e.png">

<img width="500" alt="competentieListImage" src="https://user-images.githubusercontent.com/26089533/166312826-60e526e7-150c-4ed0-8d59-6ab7cd53cac2.png">

## Wireflow
<img height="800" alt="Wireflow" src="https://user-images.githubusercontent.com/26089533/166059026-5cb29b42-1e81-4268-b1fe-ad049df2c29b.jpg"/>

## Breakdown
<img height="800" alt="Breakdown" src="https://user-images.githubusercontent.com/26089533/166059064-0894063f-ddb3-48f9-85f6-58eaa33a0be5.jpg"/>

## Code

### Client-side post naar de API van jeugdzorg
```
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
```
### server side post naar de API
Wanneer Javascript is uitgeschakeld kun je nog steeds posten naar de API dmv de server
```
app.get('/', async (req, res) => {
    competentie = await fetchJson(`${URL}v1/competentie`).then(json => json.data)
     console.log(competentie)
     res.render('index'), {
       competentie
     }
   })


   app.get('/competenties', async (req, res) => {
    competentie = await fetchJson(`${URL}v1/competentie`).then(json => json.data)
     console.log(competentie)
     res.render('competenties'), {
       competentie
     }
   })
   


   app.post('/', urlencodedParser, (req, res) => {

    const postData = {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetchJson(`${URL}v1/competentie`, postData).then(function () {
      res.render('index', {
        naam: 'req.body'
      })
    })
  
  })

  async function fetchJson(url, data = {}) {
    return await fetch(url, data)
      .then((response) => response.json())
      .catch((error) => error)
  }
```
## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
