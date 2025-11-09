class NoteCard extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["title-text", "content", "style", "headBackgroundColor"];
  }
  connectedCallback() {
    if (!this.hasChildNodes()) {
      const template = document.querySelector("#note-card");
      const clonedContent = template.content.cloneNode(true);
      this.appendChild(clonedContent);

      this.querySelector("#title").textContent =
        this.getAttribute("title-text");
      this.querySelector("#content").textContent = this.getAttribute("content");
      this.querySelector(".card .title").style.backgroundColor =
        this.getAttribute("headBackgroundColor");
      console.log(this.getAttribute("headBackgroundColor"));
      this.querySelector("#remove").addEventListener("click", () =>
        this.remove()
      );
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title-text" && oldValue != newValue) {
      this.querySelector("#title").textContent = newValue;
    }
    if (name === "content" && oldValue != newValue) {
      this.querySelector("#content").textContent = newValue;
    }
    if (name === "headBackgroundColor" && oldValue != newValue) {
      this.querySelector(".title").style.backgroundColor = newValue;
    }
    if (name === "style" && oldValue != newValue) {
      const card = this.querySelector(".card");
      if (!card) return;
      // card.style.position = "fixed";//fixed
      // card.style.top = this.style.top;
      // card.style.left = this.style.left;
      card.style.backgroundColor = this.style.backgroundColor;
      // card.style.zIndex = this.style.zIndex;
    }
  }
  disconnectedCallback() {
    this.querySelector("#remove").removeEventListener("click", () =>
      this.remove()
    );
  }
}

export default NoteCard;