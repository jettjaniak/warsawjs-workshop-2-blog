(function (app) {

    let ViewBase = app.views.ViewBase;

    class ViewPostDetail extends ViewBase {
        constructor() {
            super();
            this.tpl = document.getElementById('view-post-detail-tpl').innerHTML;
            this.container = document.querySelector('.view-posts-container');
        }

        preRender(post) {
            this.render(post, this.tpl, this.container);
            this.container
                .querySelector('.btn-add-comment')
                .addEventListener('click', (event) => {
                    this.sendAddCommentEvent(post)
                });
        }

        sendAddCommentEvent(post) {
            document.dispatchEvent(new CustomEvent(
                'add-comment',
                {detail: post}
            ));
        }
    }
    app.views.ViewPostDetail = ViewPostDetail;
})(App);