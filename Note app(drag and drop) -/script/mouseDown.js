
let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;
let draggedElement = null;


function mouseDown(e) {
  draggedElement = e.target.closest('note-card');
  
  if (!draggedElement) return;
  
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  if (!draggedElement) return;
  
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  const card = draggedElement.shadowRoot.querySelector('.card');
  
  if (!card) return;

  const currentTop = parseInt(card.style.top) || card.offsetTop || 0;
  const currentLeft = parseInt(card.style.left) || card.offsetLeft || 0;
  
  const newTop = currentTop - newY;
  const newLeft = currentLeft - newX;
  
  card.style.top = newTop + "px";
  card.style.left = newLeft + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
  draggedElement = null;
}

export default mouseDown;
