const api = new ApiAdapter

init()
function init(){
  getLanguages()
  addListeners()
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

function addListeners() {
  const cards = document.querySelectorAll(`[data-id]`)
  cards.forEach(card => {card.addEventListener("click", moveToNotes)})
}

function moveToNotes(e) {
  const lang_id = e.target.getAttribute("data-id")
  const main = document.getElementsByTagName("main")[0]
  main.innerHTML = null
  api.get(`/notes/${lang_id}`)
    .then(notes => {
      notes.forEach(note => {
        const n = new Note(note)
        main.appendChild(n.renderCard())
      })
      main.appendChild(Note.renderAddNote())
    })
}