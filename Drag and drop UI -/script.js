let movedList = [];

const sortableList = document.getElementById("container");

let draggedItem = null;

sortableList.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  setTimeout(()=>{
    //   e.target.classList.add("selected");
    e.target.style.display ="none";
  },0);
});

sortableList.addEventListener("dragover", (e) => {
  e.preventDefault();
console.log('dragover')
//   e.target.classList.remove('selected');
//   e.target.classList.add('dragging');

  const afterElement = getDragAfterElement(sortableList, e.clientY);
  if (afterElement == null) sortableList.appendChild(draggedItem);
  else sortableList.insertBefore(draggedItem, afterElement);
});

sortableList.addEventListener("dragend", (e) => {
  e.target.style.display = "block";
//   e.target.classList.remove("dragging");
  draggedItem = null;
  sortableList.querySelectorAll("*").forEach((child) => {
    if (child.tagName == "LI") {
      movedList.push(Number(child.getAttribute("key")));
    }
  });
});


const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll("li")];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset)
        return { offset: offset, element: child };
      else return closest;
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
};
