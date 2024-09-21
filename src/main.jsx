import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './routes/AppLayout.jsx'
import Favorites from './features/favorites/Favorites.jsx'
import MovieDetail from './features/movie/MovieDetail.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import { getMovie } from './services/omdbApi.js'
import store from './store.js'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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

async function movieLoader({ params }) {
  const movie = await getMovie(params.id)

  return movie
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
