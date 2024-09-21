import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  count: 0,
  isFavorite: false,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    resetMovies: (state) => {
      state.movies = []
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload)
      state.count += 1
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.imdbID !== action.payload)
      state.count -= 1
    },
    checkFavorite: (state, action) => {
      state.isFavorite = state.movies.some((movie) => movie.imdbID === action.payload)
    },
  },
})

export const { setMovies, resetMovies, addMovie, removeMovie, checkFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
