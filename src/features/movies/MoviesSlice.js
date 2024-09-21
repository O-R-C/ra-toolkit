import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMovies } from '../../services/omdbApi'

const initialState = {
  movies: [],
  totalResults: 0,
  error: 'Start searching for movies!',
  status: 'idle',
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    resetMovies: (state) => {
      state.movies = []
      state.totalResults = 0
      state.error = 'Start searching for movies!'
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        if (action.payload.Error) {
          state.error = action.payload.Error
          state.movies = []
          state.totalResults = 0
        }

        if (action.payload.Search) {
          state.movies = action.payload.Search
          state.totalResults = action.payload.TotalResults
        }

        state.status = 'idle'
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'idle'
      })
  },
})

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const movies = await getMovies(query)
  return movies
})

export const { setMovies, setTotalResults, setError, resetMovies } = moviesSlice.actions

export default moviesSlice.reducer
