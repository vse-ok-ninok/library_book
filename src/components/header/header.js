import { DivComponent } from "../../common/div-component";
import './header.css';
export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState
    };

    render() {
        this.el.classList.add("header");
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="logo" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="Поиск Icon" />
                    Поиск книг
                </a>

                 <a class="menu__item" href="#favorities">
                    <img src="/static/shape.svg" alt="Избранное Icon" />
                    Избранное
                    <div class="menu__counter">
                    ${this.appState.favorities.length}
                     </div>
                </a>
            </div>
        `;
        return this.el;
    }
}