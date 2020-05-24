import React, { useEffect, useState, useReducer } from 'react'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'
import '../styles/style.css'
import userLoginContext from '../context/userLoginContext'
import { startLogin } from '../database/fireBase/auth'
import { BrowserRouter } from "react-router-dom";
// import { firebase } from '../database/fireBase/fireBase'
import SearchResult from './SearchResult'
import searchReducer from '../reducers/searchReducer'

// startLogin()

const App = () => {
    const [searchResults, setSearch] = useState([])
    const [search, dispacth] = useReducer(searchReducer, [])

    // const removeNote = (title) => {
    //     // setNotes(notes.filter((note) => note.title !== title))
    //     const action = { title, notes }
    //     dispacth({ type: 'REMOVE_NOTE', ...action })
    // }
    return (
        <BrowserRouter>
            <userLoginContext.Provider value={{ search, dispacth, searchReducer }}>
                {/* <h1>Welcome to MMDB!!!</h1> */}
                <NavigationBar />
                <SearchBar />
                <SearchResult />
            </userLoginContext.Provider >
        </BrowserRouter>
    )
}

// firebase.auth().onAuthStateChanged((user) => {
//     if (user)
//         console.log("logged in")
//     else
//         console.log("log out")
// })


export default App








// import notesReducer from '../reducers/notes'
// import NoteList from './NoteList'
// import AddNoteForm from './AddNoteForm'
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
