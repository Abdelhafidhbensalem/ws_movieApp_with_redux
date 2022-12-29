import data from "../../data"
import { ADD_MOVIE, DELETE_MOVIE, SEARCH_MOVIE } from "../constants/action-types"

const initialsState = {
    movies: data,
    search:""
}
export const movieReducer = (state = initialsState, action) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter(el => el.id != action.payload) }
        case SEARCH_MOVIE:
            return {...state,search:action.payload}
        case ADD_MOVIE:
            return {...state,movies :[...state.movies,{...action.payload,id:state.movies.length}]}
        default:
            return state
    }
}
