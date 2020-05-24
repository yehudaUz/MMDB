import React, { Component } from "react";


class SearchResult extends React.Component {
    renderTable = () => {
        let index = 0
        console.log(this.context)
        return this.context.map((movieData) => {
            const { id, name, genere, year, rating, noOfRaters } = movieData;
            return (
                <tr key={++index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{genere}</td>
                    <td>{year}</td>
                    <td>{rating}</td>
                    <td>{noOfRaters}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table table-bordered">

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
                    {this.renderTable()}
                </tbody>

            </table>
        )
    }
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
