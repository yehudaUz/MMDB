import React, { useEffect, useState, useReducer } from 'react'
// import notesReducer from '../reducers/notes'
// import NoteList from './NoteList'
// import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const SearchBar = () => {
    return (
        <section className="search-banner text-white py-5 searchBar" id="search-banner">
            <div className="container py-5 my-5">
                <div className="row text-center pb-4">
                    <div className="col-md-12">
                        <h2>Find and rate the movies YOU like!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <input className="form-control" placeholder="Search by name"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" className="form-control" >
                                                <option defaultValue>Bigger/Smaller then</option>
                                                <option>Bigger then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input className="form-control" placeholder="Search by rating"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" className="form-control" >
                                                <option defaultValue>Pick Genere</option>
                                                <option>Action</option>
                                                <option>Adventure</option>
                                                <option>Comedy</option>
                                                <option>Crime</option>
                                                <option>Drama</option>
                                                <option>Fantasy</option>
                                                <option>Horror</option>
                                                <option>Mystery</option>
                                                <option>Science Fiction</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <input className="form-control" placeholder="Search By Year"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                        <select id="inputState" className="form-control" >
                                                <option defaultValue>Bigger/Smaller</option>
                                                <option>Greater then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input className="form-control" placeholder="How many raters?"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-dark">SEARCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export { SearchBar as default }