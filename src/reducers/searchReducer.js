
// const search = (searchParams) => {
//     return { ...searchParams }
// }

const initialState = {
    name: undefined,
    ratingFilter: undefined,
    rating: undefined,
    genere: undefined,
    year: undefined,
    noOfRatersFilter: undefined,
    noOfRaters: undefined
}


const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STARTING_STATE':
            return [initialState]
        case 'SEARCH_RESULT_UPDATE':
            console.log("ZZZZZZZZZZZZZZZZZ",action)// search(action.searchParams)
            return action.searchResult
        default:
            return state
    }
    // switch (action.type) {
    //     case 'POPULATE_NOTES':
    //         return action.notes
    //     case 'ADD_NOTE':
    //         const newItem = { title: action.title, body: action.body }
    //         return [...action.notes, newItem]
    //     case 'REMOVE_NOTE':
    //         console.log(action.notes)
    //         return action.notes.filter(n => n.title != action.title)
    //     default:
    //         return state
    // }
}

export { searchReducer, initialState }