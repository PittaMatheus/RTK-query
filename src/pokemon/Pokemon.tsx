import { useGetPokemonByNameQuery, useGetPokemonListQuery } from '../services/pokemon'

export const PokemonDetail = ({
  name,
  pollingInterval,
}: {
  name: string
  pollingInterval: number
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    }
  )



  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? '...' : ''}
          </h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null}
    </>
  )
}


export const PokemonList = ({
  filter,
  pollingInterval
}: {
  filter: string
  pollingInterval?: number
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonListQuery(
    filter,
    {
      pollingInterval,
    }
  )

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.results.map((i: any, idx: number) => (
              <h3 key={idx}>
                <li>{i.name} {isFetching ? '...' : ''}</li>
              </h3>
          ))}
        </>
      ) : null}
    </>
  )
}
