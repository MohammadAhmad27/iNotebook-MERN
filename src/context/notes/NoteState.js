import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = (title, description) => {
        // TODO API Call
        const note =
        {
            "_id": "6132251955378",
            "user": "c131dc5e3e4037cd4734a066",
            "title": title,
            "description": description,
            "tag": "personal",
            "date": "2023-09-03T14:20:09.509Z",
            "_v": 0
        };

        setNotes(notes.concat(note))
    }
    //Delete a Note
    const deleteNote = (id) => {
        console.log("Deleting this node via ID" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //Edit a Note
    const editNote = (id, title, description) => {

        //Logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>


    )
}

export default NoteState;