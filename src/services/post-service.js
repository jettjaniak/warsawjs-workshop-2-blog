(function (app) {
    class PostsService {
        constructor() {
            this.posts = [];
        }

        fetch(callback) {
            this.posts = JSON.parse(localStorage.getItem('posts')) || [];
            callback({posts: this.posts})
        }

        addPost(post, callback) {
            this.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback();
        }

        removePost(id, callback) {
            let wantedPostId = this.posts.findIndex((element) => {
                return element.id === id;
            });
            this.posts.splice(wantedPostId, 1);
            localStorage.setItem('posts', JSON.stringify(this.posts));
            callback();
        }
        

        getById(id) {
            return this.posts.find((post) => {
                return post.id === parseInt(id);
            })
        }
    }
    app.services.PostsService = PostsService;
})(App);