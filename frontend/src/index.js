const api = new ApiAdapter

init()

function init(){
  getLanguages()
  
}

function getLanguages() {
api.get('/languages')
 .then( languages => {
   const main = document.getElementsByTagName("main")[0]
   languages.forEach(lang => {
     const l = new Language(lang)
     main.appendChild(l.renderCard())
   })
   main.appendChild(Language.renderAddLanguage())
 })
}