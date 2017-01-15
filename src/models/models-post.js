(function (app) {
    class PostModel  {
        constructor(post) {
            this.id = post.id;
            this.title = post.title;
            this.description = post.description;
            this.comments = post.comments || [];
        }
        addComment(comment) {
            this.comments.push(comment.msg);
        }
    }

    class CommentModel {
        constructor(comment) {
            this.msg = comment.msg;
        }
    }

    app.models.PostModel = PostModel;
    app.models.CommentModel = CommentModel;
})(App);