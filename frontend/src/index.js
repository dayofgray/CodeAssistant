let cardContainer
init()
function init(){
  getLanguages()
}

function getLanguages() {
const main = document.getElementsByTagName("main")[0]
if (!cardContainer) {
  main.appendChild(document.createElement("div")).setAttribute("class", "card-container")
  cardContainer = document.getElementsByClassName("card-container")[0]
}
cardContainer.innerHTML = null
ApiAdapter.get('/languages')
 .then( languages => {
   languages.forEach(lang => {
     const l = new Language(lang)
     let div = l.renderCard()
     div.addEventListener("click", moveToNotes)
     cardContainer.appendChild(div)
   })
   cardContainer.appendChild(Language.renderAddLanguage())
   const form = document.getElementById("create-language")
   form.addEventListener("submit", Language.submitLanguage)
   })
 }

function moveToNotes(e, id) {
  const lang_id = id ? id : e.target.getAttribute("data-id")
  cardContainer.innerHTML = null
  const p = document.createElement("p")
  const a = document.createElement("a")
  a.href = "index.html"
  cardContainer.appendChild(a)
  ApiAdapter.get(`/languages/${lang_id}`)
    .then(language => {
      language.notes.forEach(note => {
        const n = new Note(note)
        cardContainer.appendChild(n.renderCard())
      })
      cardContainer.appendChild(Note.renderAddNote(lang_id))
      const form = document.getElementById("create-note")
      form.addEventListener("submit", Note.submitNote)
    })
    const back = document.getElementById("back")
    back.toggleAttribute("hidden")
}