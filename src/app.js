import { FavoritiesView } from "./views/favorities/favorieties";
import { MainView } from "./views/main/main";

class App {
    routes = [
        {path: "", view: MainView },
        {path: "#favorities", view: FavoritiesView },
    ];
    appState = {
        favorities: []
}
    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    };

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
};

new App();