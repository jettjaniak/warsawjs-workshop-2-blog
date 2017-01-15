(function (app) {

    let ViewBase = app.views.ViewBase;

    class ViewPostsList extends ViewBase {
        constructor() {
            super();  // zbedne?
            this.tpl = document.getElementById('view-post-list-tpl').innerHTML;
            this.container = document.querySelector('.view-posts-container');
            this.container.addEventListener('click', (event) => {
                let el = event.target;
                if (el.className.includes('btn-remove')) {
                    let id = parseInt(el.dataset.id);
                    this.sendRemoveEvent(id)
                }
            });
        }

        sendRemoveEvent(id) {
            document.dispatchEvent(new CustomEvent(
                'remove-post',
                {detail: id}
            ));
        }

        preRender(data) {
            this.render(data, this.tpl, this.container);
        }

        // render(data) {
        //     let result = Handlebars.compile(this.tpl)(data);
        //     this.container.innerHTML = result;
        // }
    }
    app.views.ViewPostsList = ViewPostsList;
})(App);