class Note {
    constructor(noteJSON) {
        this.id = noteJSON.id
        this.languageId = noteJSON.language_id
        this.topic = noteJSON.topic
        this.content = noteJSON.content
    }

    renderCard() {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-id", this.id)
        div.setAttribute("data-language-id", this.languageId)
        let p1 = document.createElement('p')
        p1.innerHTML = this.topic
        let p2 = document.createElement('p')
        p2.innerHTML = this.content
        div.appendChild(p1)
        div.appendChild(p2)
        return div
    }

    static renderAddNote() {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-create", "new")
        let button = document.createElement("button")
        button.innerHTML = "Create a Note"
        div.appendChild(button)
        return div
    }
}