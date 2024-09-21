import { useRef } from 'react'
import { Form } from 'react-router-dom'
import { debounceSubmit } from '../../utility/debounceSubmit'

export default function SearchBar() {
  const formRef = useRef()

  const handleChange = () => {
    debounceSubmit(formRef.current)
  }

  return (
    <Form
      method='post'
      ref={formRef}
    >
      <input
        type='text'
        name='query'
        placeholder='Поиск'
        onChange={handleChange}
        className='w-60 p-2 rounded-xl bg-violet-500 text-white placeholder:text-white focus-visible:outline-black'
      />
    </Form>
  )
}
