// import {
//     ADD_TODO,
//     TOGGLE_TODO,
//     SET_VISIBILITY_FILTER,
//     VisibilityFilters
//   } from './actions'

import { useState, useReducer } from 'react'

const [searchResultsState, setSearchState] = useState()


const actions = (state , action) => {
    switch (action.type) {
        case "SEARCH":
            const newState = { ...state, ...action.state }
            return setSearchState(newState)
        default:
            return state
    }
}

export { searchResultsState, actions }

// const [searchRed, dispacth] = useReducer(searchReducer, [])
