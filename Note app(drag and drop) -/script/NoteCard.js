const NoteCard = (id,titleText,content,headBackgroundColor)=>{
    const template = document.querySelector("#note-card");
    const card = template.content.cloneNode(true);

    card.querySelector("#title").textContent = titleText;
    card.querySelector("#content").textContent = content;
    card.querySelector(".title").style.backgroundColor = headBackgroundColor;

    card.querySelector("#remove")
        .addEventListener("click", () =>
            card.remove()
        );
    card.setAttribute('id',`card_${id}`);
    return card;
}