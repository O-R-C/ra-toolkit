import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div
      id='error-page'
      className='flex flex-col gap-6 w-1/2 bg-gray-800 p-6 mx-auto overflow-auto no-scrollbar rounded-xl'
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to='/'
        replace
        className='text-violet-500'
      >
        Вернуться на главную
      </Link>
    </div>
  )
}
