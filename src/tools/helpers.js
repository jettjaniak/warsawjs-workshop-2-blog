(function (app) {
    class Helpers {
        static getRandomId() {
            return parseInt(Math.random() * 10000)
        }
    }
    app.Helpers = Helpers;
})(App);