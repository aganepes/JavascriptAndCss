let startX = 0, startY = 0;
let newX = 0, newY = 0;
let draggedElement = null;

function mouseDown(e) {
  // Find the note-card element - handle shadow DOM clicks
  draggedElement = e.target.closest('.card');

  if (!draggedElement) return;

  // Get initial mouse position
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  // Calculate mouse movement delta from initial position
  newX = e.clientX - startX;
  newY = e.clientY - startY;

  startX = e.clientX;
  startY = e.clientY;

  // Set position on the .card element
  draggedElement.style.top = draggedElement.offsetTop + newY + "px";
  draggedElement.style.left = draggedElement.offsetLeft + newX + "px";
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);
  draggedElement = null;
}

export default mouseDown;