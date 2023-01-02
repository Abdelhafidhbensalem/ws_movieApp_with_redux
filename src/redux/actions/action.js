import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, SEARCH_MOVIE } from "../constants/action-types"

export const deleteMovie =(idDelete)=>{
    return{
        type:DELETE_MOVIE,
        payload:idDelete
    }
}
export const searchMovie=(textSearch)=>{
    return{
        type:SEARCH_MOVIE,
        payload:textSearch
    }
}
export const addMovie=(title,description,posterUrl,rating,trailerSrc)=>{
    return{
        type:ADD_MOVIE,
        payload:{title,description,posterUrl,rating,trailerSrc}
    }
}

export const editMovie=(id,title,description,rating,postUrl)=>{
    return{
        type:EDIT_MOVIE,
        payload:{id,title,description,rating,postUrl}
    }
}