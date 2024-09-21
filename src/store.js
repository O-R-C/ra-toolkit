import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './features/movies/MoviesSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})

export default store
