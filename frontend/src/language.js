class Language {
    constructor(languageJSON) {
        this.id = languageJSON.id
        this.title = languageJSON.title
        this.proficiency = languageJSON.proficiency
    }

    renderCard() {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-id", this.id)
        let p1 = document.createElement('p')
        p1.innerHTML = this.title
        let p2 = document.createElement('p')
        p2.innerHTML = `Proficiency: ${this.proficiency}`
        div.appendChild(p1)
        div.appendChild(p2)
        return div
    }

    static renderAddLanguage() {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-create", "new")
        let button = document.createElement("button")
        button.innerHTML = "Create a Language"
        div.appendChild(button)
        return div
    }
}