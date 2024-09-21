import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './features/movies/MoviesSlice'
import favoritesReducer from './features/favorites/FavoritesSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
})

export default store
