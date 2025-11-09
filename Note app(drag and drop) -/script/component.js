class NoteCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const template = document.querySelector('#note-card');
        const clonedContent = template.content.cloneNode(true);

        this.shadowRoot.appendChild(clonedContent);

        this.shadowRoot.querySelector("#title").textContent = this.getAttribute('title-text');
        this.shadowRoot.querySelector('#content').textContent = this.getAttribute('content');
    }
    static get observedAttributes() {
        return ["title-text", "content", "style"];
    }
    connectedCallback() {
        this.shadowRoot.querySelector("#remove").addEventListener('click', () => this.remove());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'title-text' && oldValue != newValue) {
            this.shadowRoot.querySelector("#title").textContent = newValue;
        }

        if (name == 'content' && oldValue != newValue) {
            this.shadowRoot.querySelector("#content").textContent = newValue;
        }
        if (name == 'style' && oldValue != newValue) {
            this.shadowRoot.querySelector(".card").style.top = this.style.top;
            this.shadowRoot.querySelector(".card").style.left = this.style.left;
        }
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("#remove").removeEventListener('click', () => this.remove());
    }
}

export default NoteCard;