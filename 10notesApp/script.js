const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

// This code retrieves an array of notes from the browser's localStorage using the getNotes function. For each note, it calls the createNoteElement function to create a new textarea element with the note's id and content. It then inserts this element into the notesContainer before the addNoteButton. This code effectively populates the UI with existing notes when the page loads.
getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

// This function retrieves the notes stored in the browser's localStorage under the key "note-ap", and parses them from a JSON string into an array. If there are no notes stored, it returns an empty array
function getNotes(){
    return JSON.parse(localStorage.getItem("note-ap") || "[]");
}

// This function saves an array of notes to the browser's localStorage under the key "note-ap". It first converts the notes array to a JSON string using JSON.stringify.
function saveNotes(notes){
    localStorage.setItem("note-ap", JSON.stringify(notes));
}

function createNoteElement(id, content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const noteDelete = confirm("Want to Delete the note?")
        if (noteDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote(){
    // first retrieves the current array of notes from the browser's localStorage
    // stores it in a constant variable named notes
    const notes = getNotes();
    // generates a new noteObj object with a randomly generated id and an empty content property.
    const noteObj = {
        id: Math.floor(Math.random()*100000),
        content: ""
    };

    // It creates a new noteElement using the createNoteElement function, passing in the id and content properties of noteObj. It then inserts this new noteElement into the notesContainer element before the addNoteButton element.
    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    // adds the new noteObj to the end of the notes array using the push method, and saves the updated array to the browser's localStorage using the saveNotes 
    notes.push(noteObj);
    saveNotes(notes);
}

function updateNote(id, newContent) {
    const notes = getNotes();
    // It then uses the filter method to find the note with the specified id and stores it in a constant variable named target.
    const target = notes.filter(note=>note.id == id)[0];

    target.content = newContent;
    saveNotes(notes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

