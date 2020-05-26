import React, { useContext } from "react";
import searchResultContext from '../context/searchResultContext'


const SearchResult = () => {

    const searchResult = useContext(searchResultContext)
    console.log(searchResult.search)

    const renderTable = () => {
        let index = 0
        if (searchResult.search.length > 0 && searchResult.search[0].id !== undefined)
            return searchResult.search.map((movieData) => (
                // const { id, name, genere, year, rating, noOfRaters} = movieData;
                <tr key={++index}>
                    <td>{movieData.id}</td>
                    <td>{movieData.name}</td>
                    <td>{movieData.genere}</td>
                    <td>{movieData.year}</td>
                    <td>{movieData.rating}</td>
                    <td>{movieData.noOfRaters}</td>
                </tr>
            ))
    }


    return (
        <table className="table table-bordered" >

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Genere</th>
                    <th scope="col">Year</th>
                    <th scope="col">Rating</th>
                    <th scope="col">No of raters</th>
                </tr>
            </thead>

            <tbody>
                {renderTable()}
            </tbody>

        </table >
    )

}

export { SearchResult as default }

// const SearchResult = (searchResults,dispatch) => {
//     const renderTable = () => {
//         let index = 0
//         console.log(searchResults,dispatch)
//         return searchResults.map((movieData) => {
//             const { id, name, genere, year, rating, noOfRaters } = movieData;
//             return (
//                 <tr key={++index}>
//                     <td>{id}</td>
//                     <td>{name}</td>
//                     <td>{genere}</td>
//                     <td>{year}</td>
//                     <td>{rating}</td>
//                     <td>{noOfRaters}</td>
//                 </tr>
//             )
//         })
//     }

//     return (
//         <table className="table table-bordered">

//             <thead>
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Genere</th>
//                     <th scope="col">Year</th>
//                     <th scope="col">Rating</th>
//                     <th scope="col">No of raters</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {renderTable()}
//             </tbody>

//         </table>
//     )
// }
