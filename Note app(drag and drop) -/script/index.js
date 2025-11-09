import Colors from "../public/colors.js";
import "./toCreateColorMenu.js";
import NoteCard from "./component.js";
import mouseDown from "./mouseDown.js";

// define note-card element
window.customElements.define("note-card", NoteCard);

// add event listener to color buttons
const colorButtons = document.querySelectorAll(".menus-container .color");

colorButtons.forEach((element, _, elements) => {
  element.addEventListener("click", (e) => {
    elements.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// add event listener to close button
const editContainer = document.querySelector(".edit-container");
const editBackgroundsElement = document.querySelector(".edit-background");

document.querySelectorAll(".edit-container .close-edit").forEach((button) => {
  button.addEventListener("click", () => {
    editContainer.style.display = "none";
    editBackgroundsElement.style.display = "none";
  });
});

// add event listener to add button
const addButton = document.querySelector(".menus-container .add-button");

addButton.addEventListener("click", () => {
  editContainer.style.display = "flex";
  editBackgroundsElement.style.display = "block";
});

// get input elements
const titleInput = document.querySelector(".edit-container #title");
const contentInput = document.querySelector(".edit-container #description");

// get ok button
const okButton = document.querySelector(".edit-container .ok-edit");

// get note container
const noteContainer = document.querySelector(".notes-container");
let zIndex = 0;
// add event listener to ok button
okButton.addEventListener("click", () => {
  // close edit element
  editContainer.style.display = "none";
  editBackgroundsElement.style.display = "none";

  // get values of input elements
  const titleNote = titleInput.value;
  titleInput.value = "";
  const contentNote = contentInput.value;
  contentInput.value = "";
  if (!titleNote || !contentNote) return;

  // create note card element
  const noteElement = document.createElement("note-card");
  // append note card to note container
  noteContainer.append(noteElement);
  // set attribute
  noteElement.setAttribute("content", contentNote);
  noteElement.setAttribute("title-text", titleNote);
  // add event
  noteElement.addEventListener("mousedown", mouseDown);
  // add z-index to note card
  zIndex++;
  noteElement.style.zIndex = zIndex;

  // get active color
  const activeColor = document.querySelector(".menus-container .color.active");
  const colorId = activeColor.getAttribute("data-name");
  const color = Colors.find((color) => color.color_id === colorId);
  // add color to note card
  noteElement.querySelector(".card .title").style.backgroundColor = color.headBackground;
  noteElement.style.backgroundColor = color.backgroundColor;
});