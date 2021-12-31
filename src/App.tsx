import { PokemonList, PokemonDetail } from './pokemon/Pokemon'
import { useState } from 'react'

const pokemon = [
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
]
const listPokemon = 'limit=10&offset=6'


export default function App() {
  const [pollingInterval, setPollingInterval] = useState(0)
  const [detail, setDetail] = useState(false)



  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {detail && pokemon.map((poke, index) => (
          <PokemonDetail key={index} name={poke} pollingInterval={pollingInterval} />
        ))}
        {!detail &&
          <PokemonList filter={listPokemon} />
        }
      </div>
    </div>
  )
}
