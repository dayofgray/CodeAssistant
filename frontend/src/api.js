class ApiAdapter {

    static get baseUrl() {
        return "http://localhost:3000"
    }

    static get(url) {
        return fetch(this.baseUrl + url)
        .then(resp => resp.json())
    }

    static submit(url, obj) {
        const postObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        return fetch(this.baseUrl + url, postObj)
        .then(resp => resp.json())
        .then((json) => {
            console.log(json)
        })
    }

    static delete(url, obj) {
        const deleteObj = {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        return fetch(this.baseUrl + url, deleteObj)
        .then(resp => resp.json())
        .then((json) => {
            console.log(json)
        })
    }
}