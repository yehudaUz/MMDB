import React from 'react'//, { useEffect, useState, useReducer, useContext } from 'react'
// import notesReducer from '../reducers/notes'
// import userLoginContext from '../context/userLoginContext'
// import searchResultContext from '../context/searchResultContext'
// import '../reducers/searchReducer'
// import searchResultContext from '../context/searchResultContext'
import { database } from '../database/fireBase/fireBase'
import searchResultContext from '../context/searchResultContext'
import { useContext } from 'react'
import { LoopCircleLoading } from 'react-loadingg';
import '../styles/style.css'

const searchParams = {
    name: undefined,
    ratingFilter: undefined,
    rating: undefined,
    genere: undefined,
    year: undefined,
    noOfRatersFilter: undefined,
    noOfRaters: undefined
}

const setNoOfRatersFilter = (e) => { e.target.value === "Bigger/Smaller" ? searchParams.noOfRatersFilter = undefined : searchParams.noOfRatersFilter = e.target.value };
const setGenere = (e) => { e.target.value === "Pick Genere" ? searchParams.genere = undefined : searchParams.genere = e.target.value };
const setRatingfilter = (e) => { e.target.value === "Bigger/Smaller" ? searchParams.ratingFilter = undefined : searchParams.ratingFilter = e.target.value };
const nameSearchChange = (e) => { e.target.value === "" ? searchParams.name = undefined : searchParams.name = e.target.value }
const ratingSearchChange = (e) => { e.target.value === "" ? searchParams.rating = undefined : searchParams.rating = e.target.value }
const yearSearchChange = (e) => { e.target.value === "" ? searchParams.year = undefined : searchParams.year = e.target.value }
const noOfRatersSearchChange = (e) => { e.target.value === "" ? searchParams.noOfRaters = undefined : searchParams.noOfRaters = e.target.value }

const getSearchResultFromDatabase = () => {
    return new Promise((resolve, reject) => {
        // const { } = searchParams
        // const ref = database.ref("MMDB");
        // console.log(ref)
        // ref.orderByChild("name").equalTo("Ameeree").on("child_added", function (snapshot) {
        //     console.log(snapshot.val());
        // });
        // ref.orderByChild("name").once("value").then(function (snapshot) {
        //searchParams....
        console.log(searchParams)
        document.getElementsByClassName("dqbMYY")[0].style.display = "unset"
        //&& searchParams.noOfRatersFilter === undefined &&  searchParams.ratingFilter === undefined
        if (searchParams.name === undefined && searchParams.year === undefined && searchParams.genere === undefined)
            resolve([]);

        const search = (snapshot) => {
            let searchResult = []
            if (!snapshot.exists()) {
                console.log("NOPE!");
            }
            else {
                snapshot.forEach(function (searchMatch) {
                    searchResult.push(searchMatch.val())
                    //check that name/year/genere match
                    if (searchResult[searchResult.length - 1].name !== undefined && !searchResult[searchResult.length - 1].name.includes(((searchParams.name.charAt(0).toUpperCase() + searchParams.name.slice(1)))) ||
                        (searchParams.year !== undefined && searchParams.year !== searchResult[searchResult.length - 1].startYear) ||
                        (searchParams.genere !== undefined && !searchResult[searchResult.length - 1].genere.includes(searchParams.genere)))
                        searchResult.pop()
                    //check the bigger/smaller noOfRaters/rating is match
                    //                         genere: undefined
                    // name: undefined
                    // noOfRaters: undefined
                    // noOfRatersFilter: undefined
                    // rating: undefined
                    // ratingFilter: undefined
                    else if ((searchParams.rating !== undefined && searchParams.ratingFilter === "Bigger" &&
                        searchResult[searchResult.length - 1].rating !== undefined && searchResult[searchResult.length - 1].rating < searchParams.rating))
                        searchResult.pop()
                    else if ((searchParams.rating !== undefined && searchParams.ratingFilter === "Smaller" &&
                        searchResult[searchResult.length - 1].rating !== undefined && searchResult[searchResult.length - 1].rating > searchParams.rating))
                        searchResult.pop()
                    else if ((searchParams.noOfRaters !== undefined && searchParams.noOfRatersFilter === "Bigger" &&
                        searchResult[searchResult.length - 1].noOfRaters !== undefined && Number(searchResult[searchResult.length - 1].noOfRaters) < Number(searchParams.noOfRaters)))
                        searchResult.pop()
                    else if ((searchParams.noOfRaters !== undefined && searchParams.noOfRatersFilter === "Smaller" &&
                        searchResult[searchResult.length - 1].noOfRaters !== undefined && Number(searchResult[searchResult.length - 1].noOfRaters) > Number(searchParams.noOfRaters)))
                        searchResult.pop()

                });
            }
            document.getElementsByClassName("dqbMYY")[0].style.display = "none";
            resolve(searchResult)
        }

        if (searchParams.name !== undefined)
            database.ref("/").orderByChild('name').startAt(searchParams.name.charAt(0).toUpperCase() + searchParams.name.slice(1)).
                limitToFirst(250).on("value", function (snapshot) {
                    search(snapshot)
                })
        else if (searchParams.genere !== undefined)
            database.ref("/").orderByChild('genere').startAt(searchParams.genere).limitToFirst(250).on("value", function (snapshot) {
                search(snapshot)
            })
        else if (searchParams.year !== undefined)   // endWith \u{f8ff}
            database.ref("/").orderByChild('startYear').equalTo(searchParams.year).limitToFirst(250).on("value", function (snapshot) {
                search(snapshot)
            })
    })
    // console.log(searchResult)
    // console.log(searchParams)
    // const searchResult = useContext(searchResultContext)
    // return (

    //     <>
    //     </>
    // )
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
    const searchResult = useContext(searchResultContext)
    const dispatch = searchResult.dispatch
    console.log("X", searchResult)
    // dispatch({ type: 'SEARCH' })

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
                                                <option defaultValue>Bigger/Smaller</option>
                                                <option>Bigger</option>
                                                <option>Smaller</option>
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
                                                <option>Bigger</option>
                                                <option>Smaller</option>
                                            </select>
                                            <input className="form-control" placeholder="How many raters?"
                                                onChange={noOfRatersSearchChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-dark" onClick={
                                            () => {
                                                // const searchResult = getSearchResultFromDatabase(searchParams)
                                                getSearchResultFromDatabase(searchParams).then((searchResult) => {
                                                    dispatch({ type: 'SEARCH_RESULT_UPDATE', searchResult })
                                                })
                                            }
                                        }>SEARCH</button>
                                        <LoopCircleLoading style={{ Left: 50 + 'px', bottom: 0 + 'px' }} />
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