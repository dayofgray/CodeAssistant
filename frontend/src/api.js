class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000"
    }

    get(url) {
        return fetch(this.baseUrl + url)
        .then(resp => resp.json())
    }
}