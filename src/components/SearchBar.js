import React, { useEffect, useState, useReducer } from 'react'
// import notesReducer from '../reducers/notes'
// import NoteList from './NoteList'
// import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const SearchBar = () => {
    return (
        <section class="search-banner bg-danger text-white py-5" id="search-banner">
            <div class="container py-5 my-5">
                <div class="row text-center pb-4">
                    <div class="col-md-12">
                        <h2>Find and rate the movies YOU like!</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="form-group ">
                                            <input class="form-control" placeholder="Search by name"></input>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group ">
                                            <select id="inputState" class="form-control" >
                                                <option selected>Bigger/Smaller then</option>
                                                <option>Bigger then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input class="form-control" placeholder="Search by rating"></input>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group ">
                                            <select id="inputState" class="form-control" >
                                                <option selected>Pick Genere</option>
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
                                    <div class="col-md-2">
                                        <div class="form-group ">
                                            <input class="form-control" placeholder="Search By Year"></input>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group ">
                                        <select id="inputState" class="form-control" >
                                                <option selected>Bigger/Smaller</option>
                                                <option>Greater then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input class="form-control" placeholder="How many raters?"></input>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="button" class="btn btn-dark">SEARCH</button>
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