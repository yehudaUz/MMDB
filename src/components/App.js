import React, { useEffect, useState, useReducer } from 'react'
import SearchBar from './SearchBar'
import '../styles/style.css'
// import notesReducer from '../reducers/notes'
// import NoteList from './NoteList'
// import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'
import { firebase } from '../fireBase/fireBase';
import { startLogin } from '../fireBase/auth'
// const NoteApp = () => {
//     //const [notes, setNotes] = useState([])
//     const [notes, dispacth] = useReducer(notesReducer, [])

//     const removeNote = (title) => {
//         // setNotes(notes.filter((note) => note.title !== title))
//         const action = { title, notes }
//         dispacth({ type: 'REMOVE_NOTE', ...action })
//     }

//     useEffect(() => {
//         const notes = JSON.parse(localStorage.getItem('notes'))

//         if (notes) {
//             // setNotes(notesData)
//             dispacth({ type: 'POPULATE_NOTES', notes })
//         }
//     }, [])

//     useEffect(() => {
//         localStorage.setItem('notes', JSON.stringify(notes))
//     }, [notes])

//     return (
//         <NotesContext.Provider value={{ notes, dispacth,removeNote }}>
//             <h1>Notes</h1>
//             <NoteList  />
//             <AddNoteForm  />
//         </NotesContext.Provider >
//     )
// }

startLogin()

const App = () => {
    return (
        <NotesContext.Provider /*value={{ notes, dispacth, removeNote }}*/>
            <h1>Welcome to MMDB!!!</h1>
            <SearchBar />
            {/* <NoteList />
            <AddNoteForm /> */}
        </NotesContext.Provider >
    )
}

firebase.auth().onAuthStateChanged((user) => {
    if (user)
        console.log("logged in")
    else
        console.log("log out")
})


export default App