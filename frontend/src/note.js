class Note {
    constructor(noteJSON) {
        this.id = noteJSON.id
        this.languageId = noteJSON.language_id
        this.topic = noteJSON.topic
        this.content = noteJSON.content
    }
}