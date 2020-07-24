
init()
function init(){
  getLanguages()
}

function getLanguages() {
const main = document.getElementsByTagName("main")[0]
main.innerHTML = null
ApiAdapter.get('/languages')
 .then( languages => {
   languages.forEach(lang => {
     const l = new Language(lang)
     let div = l.renderCard()
     div.addEventListener("click", moveToNotes)
     main.appendChild(div)
   })
   main.appendChild(Language.renderAddLanguage())
   const form = document.getElementById("create-language")
   form.addEventListener("submit", Language.submitLanguage)
   })
 }

function moveToNotes(e) {
  const lang_id = e.target.getAttribute("data-id")
  const main = document.getElementsByTagName("main")[0]
  main.innerHTML = null
  ApiAdapter.get(`/languages/${lang_id}`)
    .then(language => {
      language.notes.forEach(note => {
        const n = new Note(note)
        main.appendChild(n.renderCard())
      })
      main.appendChild(Note.renderAddNote())
    })
}