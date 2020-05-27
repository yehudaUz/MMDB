import React from 'react'//, { useEffect, useState, useReducer, useContext } from 'react'
// import notesReducer from '../reducers/notes'
// import userLoginContext from '../context/userLoginContext'
// import searchResultContext from '../context/searchResultContext'
// import '../reducers/searchReducer'
// import searchResultContext from '../context/searchResultContext'
import { database } from '../database/fireBase/fireBase'

const searchParams = {
    name: undefined,
    ratingFilter: undefined,
    rating: undefined,
    genere: undefined,
    year: undefined,
    noOfRatersFilter: undefined,
    noOfRaters: undefined
}

const setNoOfRatersFilter = (e) => { searchParams.noOfRatersFilter = e.target.value };
const setGenere = (e) => { searchParams.genere = e.target.value };
const setRatingfilter = (e) => { searchParams.ratingFilter = e.target.value };
const nameSearchChange = (e) => { searchParams.name = e.target.value }
const ratingSearchChange = (e) => { searchParams.rating = e.target.value }
const yearSearchChange = (e) => { searchParams.year = e.target.value }
const noOfRatersSearchChange = (e) => { searchParams.noOfRaters = e.target.value }

const sendSearch = () => {
    console.log(searchParams)
    // const { } = searchParams
    // const ref = database.ref("MMDB");
    // console.log(ref)
    // ref.orderByChild("name").equalTo("Ameeree").on("child_added", function (snapshot) {
    //     console.log(snapshot.val());
    // });
    // ref.orderByChild("name").once("value").then(function (snapshot) {
    database.ref("/").orderByChild('name').equalTo("Ameeree").on("value", function (snapshot) {
        if (!snapshot.exists()) {
            console.log("NOPE!");
        }
        else {
            snapshot.forEach(function (param) {
                console.log(param.key + ": " + param.val());
            });
        }
    })
    // database.ref('991').once('value').then(function (snapshot) {
    //     if (!snapshot.exists()) {
    //         console.log("NOPE!");
    //     }
    //     else {
    //         snapshot.forEach(function (param) {
    //             console.log(param.key + ": " + param.val());
    //         });
    //     }
    // });
}



const SearchBar = () => {
    // console.log(searchResultContext)
    // const searchResult = useContext(searchResultContext)
    // console.log("ZZZZ",searchResult.search)

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
                                            <input className="form-control" placeholder="Search by name"
                                                onChange={nameSearchChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" className="form-control" onChange={setRatingfilter} >
                                                <option defaultValue>Bigger/Smaller then</option>
                                                <option>Bigger then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input className="form-control" placeholder="Search by rating"
                                                onChange={ratingSearchChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" className="form-control" onChange={setGenere} >
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
                                            <input className="form-control" placeholder="Search By Year"
                                                onChange={yearSearchChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" className="form-control" onChange={setNoOfRatersFilter} >
                                                <option defaultValue>Bigger/Smaller</option>
                                                <option>Greater then ( >= )</option>
                                                <option>Smaller then ( >= )</option>
                                            </select>
                                            <input className="form-control" placeholder="How many raters?"
                                                onChange={noOfRatersSearchChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-dark" onClick={sendSearch}>SEARCH</button>
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