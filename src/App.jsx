import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonInfo from './pages/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route element = {<ProtectedRoutes />}>
          <Route path='/pokedex' element = {<Pokedex />} />
          <Route path='/pokedex/:pokemonId' element = {<PokemonInfo />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
