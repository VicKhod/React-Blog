const responseHandler = res => {
    return res.ok ? res.json() : res.statusText;
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getPostList() {
        return fetch(`${this.path}/posts`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePost(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

}

const config = {
    path: "https://api.react-learning.ru",
    token: localStorage.getItem("token")
}

const api = new Api(config);

export default api;