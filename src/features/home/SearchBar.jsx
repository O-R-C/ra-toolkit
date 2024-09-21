import { debounceSearch } from '../../utility/debounceSearch'
import { useDispatch } from 'react-redux'

export default function SearchBar() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    debounceSearch(e.target.value, dispatch)
  }

  return (
    <form>
      <input
        type='text'
        name='query'
        placeholder='Поиск'
        onChange={handleChange}
        className='w-60 p-2 rounded-xl bg-violet-500 text-white placeholder:text-white focus-visible:outline-black'
      />
    </form>
  )
}
