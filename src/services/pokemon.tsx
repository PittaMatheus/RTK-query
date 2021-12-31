// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const pokemonGetByName = createApi(
    {
        reducerPath: 'pokemonApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
        endpoints: (builder) => ({ 
            getPokemonByName: builder.query<any, string>({ query: (name) => `pokemon/${name}` }),
            getPokemonList: builder.query<any, string>({ query: (filter) => `pokemon?${filter}` })
        
        
        }),
    }
)

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonGetByName