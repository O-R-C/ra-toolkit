export async function getMovies(query) {
  const url = import.meta.env.VITE_OMDB_API_URL + `&s=${query}`
  const data = await fetch(url)

  if (!data.ok) {
    throw new Error(data.error)
  }

  const movies = await data.json()
  console.log('🚀 ~ movies:', movies)
  if (movies.Error) return movies

  const totalResults = Math.ceil(Number(movies.totalResults) / 10)

  if (totalResults > 1) {
    for (let i = 2; i <= totalResults; i++) {
      const data = await fetch(url + `&page=${i}`)
      const moviesPage = await data.json()
      movies.Search = [...movies.Search, ...moviesPage.Search]
    }
  }

  return movies
}

export async function getMovie(imdbID) {
  const url = import.meta.env.VITE_OMDB_API_URL + `&i=${imdbID}`
  const data = await fetch(url)

  if (!data.ok) {
    throw new Error(data.error)
  }

  const movie = await data.json()

  return movie
}
