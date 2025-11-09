import Colors from "../public/colors.js";
import NoteCard from "./component.js";
import mouseDown from "./mouseDown.js";

let zIndex = 0;
// define note-card element
window.customElements.define("note-card", NoteCard);

// color button
const colorButtons = document.querySelectorAll(".menus-container .color");

colorButtons.forEach((element, _, elements) => {
  element.addEventListener("click", (e) => {
    elements.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// close button
const editContainer = document.querySelector(".edit-container");
const editBackgroundsElement = document.querySelector(".edit-background");

document.querySelectorAll(".edit-container .close-edit").forEach((button) => {
  button.addEventListener("click", () => {
    editContainer.style.display = "none";
    editBackgroundsElement.style.display = "none";
  });
});

// add button
const addButton = document.querySelector(".menus-container .add-button");

addButton.addEventListener("click", () => {
  editContainer.style.display = "flex";
  editBackgroundsElement.style.display = "block";
});

// input element
const titleInput = document.querySelector(".edit-container #title");
const contentInput = document.querySelector(".edit-container #description");

// ok button
const okButton = document.querySelector(".edit-container .ok-edit");
const noteContainer = document.querySelector(".notes-container");

okButton.addEventListener("click", () => {
  // close to edit element
  editContainer.style.display = "none";
  editBackgroundsElement.style.display = "none";

  // get value of input element
  const titleNote = titleInput.value;
  const contentNote = contentInput.value;

  // add element to note container
  const noteElement = document.createElement("note-card");
  noteElement.setAttribute("title",titleNote);
  noteElement.setAttribute("content",contentNote);
  noteContainer.append(noteElement);
  noteElement.addEventListener("mousedown", mouseDown);
  zIndex++;
  noteElement.style.zIndex = zIndex;
});

// add to the mousedown event
const cards = document.querySelectorAll('note-card');
document.querySelector('note-card').addEventListener("mousedown",mouseDown);