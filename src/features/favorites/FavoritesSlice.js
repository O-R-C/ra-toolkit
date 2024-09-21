import { createSlice } from '@reduxjs/toolkit'
import { getFavorites, saveFavorites } from '../../utility/localFavorites'

const favorites = getFavorites()

const initialState = {
  movies: favorites,
  count: favorites.length,
  isFavorite: false,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
      state.count = state.movies.length

      saveFavorites(state.movies)
    },
    resetMovies: (state) => {
      state.movies = []
      state.count = 0

      saveFavorites(state.movies)
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload)
      state.count += 1

      saveFavorites(state.movies)
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.imdbID !== action.payload)
      state.count -= 1

      saveFavorites(state.movies)
    },
    checkFavorite: (state, action) => {
      state.isFavorite = state.movies.some((movie) => movie.imdbID === action.payload)
    },
  },
})

export const { setMovies, resetMovies, addMovie, removeMovie, checkFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
