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
        let button = document.createElement("button")
        button.innerText = "Delete"
        div.append(button)
        return div
    }

    deleteNote() {
        console.log("note deleted")
        return false
    }

    static async submitNote(e) {
        e.preventDefault()
        const topic = document.getElementById("topic").value
        const content = document.getElementById("content").value
        const langId = document.getElementById("lang-id").value
        const obj = {
            language_id: langId,
            topic,
            content
        }
        const result = await ApiAdapter.submit('/notes', obj)
        moveToNotes(null, langId)
    }

    static renderAddNote(id) {
        let div = document.createElement('div')
        div.setAttribute("class", "card")
        div.setAttribute("data-create", "new")
        div.innerHTML = `<div class="inner-card">
                         <h3 class="card-title">Create a Note</h3>
                         <form id="create-note">
                            <label for="topic">Topic:</label><br>
                            <input type="text" id="topic" name="topic"><br>
                            <label for="content">Note:</label><br>
                            <textarea id="content" name="content" form="createnoteform" placeholder="Enter notes here..."></textarea> <br> <br>
                            <input type="hidden" id="lang-id" value="${id}">
                            <input type="submit">    
                         </form>
                         </div>`
        return div
    }
}