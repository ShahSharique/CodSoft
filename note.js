const addButton = document.getElementById("add");

// function onLoadingAnotherHtml() {
//   const notesValue = localStorage.notes;
//   document.getElementById("note").innerHTML = notesValue;
// }

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
};
// console.log(JSON.stringify(notes));
const addNewNotes = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = ` <div class="opration">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData);

  const editButton = note.querySelector(".edit");
  const deleButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  deleButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  //toggle
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;
    updateLSData();
  });

  document.body.appendChild(note);
};

//geting the data

// if(notes != null){
//   note.insertAdjacentHTML("afterbegin", htmlData);
//   updateLSData;
// }
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNewNotes(note));
}

addButton.addEventListener("click", () => addNewNotes());
