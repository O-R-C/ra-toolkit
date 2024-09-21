import { fetchMovies, resetMovies } from '../features/movies/MoviesSlice'

let timer

export const debounceSearch = (query, fn) => {
  if (timer) clearTimeout(timer)

  timer = setTimeout(() => {
    if (!query) {
      fn(resetMovies())
      return
    }

    fn(fetchMovies(query))
  }, 500)
}
