import React from 'react'
import "./CardList.css"
import {useSelector} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

function CardList() {
 const movies = useSelector(state => state.movies)
 const search = useSelector(state => state.search)
  return (
    <div className="d-flex">
      {movies.filter(el=>el.title.toLowerCase().includes(search.toLowerCase().trim())).map(el => <MovieCard key={el.id} el={el}/> )}
      </div>
  )
}

export default CardList