import PokemonCard from "./PokemonCard";

const PokemosList = ({pokemons}) => {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 pt-12 max-w-[1000px] mx-auto pb-20">
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
            }
        </section>
    )
}
export default PokemosList