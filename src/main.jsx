import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './routes/appLayout.jsx'
import './index.css'
import Favorites from './features/favorites/Favorites.jsx'
import MovieDetail from './features/movie/MovieDetail.jsx'
import { getMovie, getMovies } from './services/omdbApi.js'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    action: searchAction,
    // loader: searchLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Favorites />,
          },
          {
            path: 'movie/:id',
            element: <MovieDetail />,
            loader: movieLoader,
          },
        ],
      },
    ],
  },
])

async function searchAction({ request }) {
  const formData = await request.formData()
  const query = formData.get('query').trim()
  console.log(query)

  if (!query || query.length < 3) {
    return null
  }

  const movies = await getMovies(query)

  return movies
}

async function movieLoader({ params }) {
  const movie = await getMovie(params.id)

  return movie
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
