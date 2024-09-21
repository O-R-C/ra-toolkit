export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favoritesMovies')) || []
}

export const saveFavorites = (favorites) => {
  localStorage.setItem('favoritesMovies', JSON.stringify(favorites))
}
