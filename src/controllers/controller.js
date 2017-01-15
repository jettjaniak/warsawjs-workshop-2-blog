(function (app) {

    let ViewAddPostForm = app.views.ViewAddPostForm;
    let viewPostsList = new app.views.ViewPostsList(); //singleton
    let viewPostDetail = new app.views.ViewPostDetail();
    let PostModel = app.models.PostModel;
    let CommentModel = app.models.CommentModel;
    let postsService = new app.services.PostsService(); //singleton
    let Helpers = app.Helpers;

    class PostController {
        constructor() {
            new ViewAddPostForm();
            this.fetchPosts();

            document.addEventListener('add-post', (event) => {
                let id = Helpers.getRandomId();
                let post = new PostModel(Object.assign(event.detail, {id}));
                postsService.addPost(post, this.fetchPosts);
            });

            document.addEventListener('remove-post', (event) => {
                postsService.removePost(event.detail, this.fetchPosts)
            });

            document.addEventListener('add-comment', (event) => {
                let post = event.detail;
                post.addComment(new CommentModel({msg:'New comment!'}))
                debugger;
            });

            window.addEventListener('hashchange', (event) => {
                this.getPostById(parseInt(event.newURL.split('#')[1]));
            });

        }

        fetchPosts() {
            postsService.fetch(viewPostsList.preRender.bind(viewPostsList));
        }

        getPostById(id) {
            let post = new PostModel(postsService.getById(id));
            viewPostDetail.preRender(post);
        }
    }
    app.controllers.PostController = PostController;
})(App);