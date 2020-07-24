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
        let button = document.createElement("button")
        button.innerText = "Delete"
        div.append(button)
        return div
    }

    deleteLanguage() {
        console.log("This language was deleted")
    }

    static async submitLanguage(e) {
        e.preventDefault()
        const title = document.getElementById("title").value
        const proficiency = document.getElementById("proficiency").value
        const obj = {
            title,
            proficiency
        }
        const result = await ApiAdapter.submit('/languages', obj)
        getLanguages()
    }

    static renderAddLanguage() {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-create", "new")
        div.innerHTML = `<div class="inner-card">
                         <h3 class="card-title">Create a Language</h3>
                         <form id="create-language">
                            <label for="title">Language Name:</label><br>
                            <input type="text" id="title" name="title"><br>
                            <label for="proficiency">Proficiency:</label><br>
                            <input type="text" id="proficiency" name="proficiency" placeholder="Beginner, Moderate, Advanced"> <br> <br>
                            <input type="submit">    
                         </form>
                         </div>`
        return div
    }
}