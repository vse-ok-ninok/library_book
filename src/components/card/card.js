import { DivComponent } from '../../common/div-component';
import './card.css';


export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    };

    #addToFavorities() {
        this.appState.favorities.push(this.cardState);
    }
    #deleteFromFavorities() {
        this.appState.favorities = this.appState.favorities.filter(
            b => b.key !== this.cardState.key
        );
    }

    render() {
        this.el.classList.add('card');
        const existInFavorities  = this.appState.favorities.find(
            b => b.key == this.cardState.key
        );
        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка" />
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
                </div>

                <div class="card__name">
                    ${this.cardState.title}
                </div>

                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Автор неизвестен'}
                </div>

                <div class="card__footer">
                    <button 
                        class="button__add ${existInFavorities ? 'button__active' : ''}">
                                ${existInFavorities 
                                        ? '<img src="./static/shape.svg" />'
                                        : '<img src="./static/favorities_white.svg" />'
                                }
                    </button>
                </div>
            </div>
        `;

    if (existInFavorities) {
        this.el
            .querySelector('button')    
            .addEventListener('click', this.#deleteFromFavorities.bind(this));
    } else {
        this.el
            .querySelector('button')
            .addEventListener('click', this.#addToFavorities.bind(this));
    };
            return this.el;
    };
}