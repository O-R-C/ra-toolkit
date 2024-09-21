import { Outlet } from 'react-router-dom'
import Wrapper from '../ui/Wrapper'
import Header from '../features/home/Header'
import Movies from '../features/movies/Movies'
import Logo from '../features/home/Logo'
import SearchBar from '../features/home/SearchBar'
import SearchCount from '../features/home/SearchCount'
import Main from '../ui/Main'

export default function AppLayout() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <SearchBar />
        <SearchCount />
      </Header>

      <Main>
        <Movies />
        <Outlet />
      </Main>
    </Wrapper>
  )
}
