const api = new ApiAdapter

function getLanguages() {
api.get('/languages')
 .then( languages => {
   const main = document.getElementsByTagName("main")[0]
   languages.forEach(lang => {
     const l = new Language(lang)
     main.appendChild(l.renderCard())
   })
 })
}

getLanguages()

/* fetch(`${BACKEND_URL}/languages/5`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse)); */

/* object = {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "React",
  })
}
 */
/* fetch(`${BACKEND_URL}/languages`, object)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse)); *