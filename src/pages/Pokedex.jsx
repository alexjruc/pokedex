import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemosList from "../components/pokedex/PokemosList";
import { paginateData } from "../utils/pagination";
import Header from "../components/pokedex/Header";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [currentType, setCurrentType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const trainerName = useSelector((store) => store.trainerName);

    const pokemonsByName = pokemons.filter((pokemon) =>
        pokemon.name.includes(pokemonName)
    );

    const { itemsInCurrrentPage, lastPage, pagesInCurrentBlock } = paginateData(
        pokemonsByName,
        currentPage
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
        e.target.reset();
    };

    const handleChangeType = (e) => {
        setCurrentType(e.target.value);
    };

    const handleNextPage = () => {
        const newCurrentPage = currentPage + 1;
        setCurrentPage(newCurrentPage);
    };

    const handlePreviusPage = () => {
        const newCurrentPage = currentPage - 1;
        setCurrentPage(newCurrentPage);
    };

    useEffect(() => {
        if (currentType === "") {
            axios
                .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
                .then(({ data }) => setPokemons(data.results))
                .catch((err) => console.log(err));
        }
    }, [currentType]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then(({ data }) => setPokemonTypes(data.results))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (currentType !== "") {
            axios
                .get(`https://pokeapi.co/api/v2/type/${currentType}/`)
                .then(({ data }) => {
                    setPokemons(data.pokemon.map((pokemon) => pokemon.pokemon));
                })
                .catch((err) => console.log(err));
        }
    }, [currentType]);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentType]);

    return (
        <main className="min-h-screen w-full bg-[#E3ECF2]">
            <Header />
            <section className="grid justify-center items-center gap-4 px-4 py-10 md:text-xl">
                <p className="text-center">
                    <span className="capitalize font-semibold text-[#D93F3F]">
                        Bienvenido {trainerName}
                    </span>
                    , you can find your favorite pokemon here!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 justify-center"
                >
                    <div className="flex">
                        <input
                            name="pokemonName"
                            type="text"
                            placeholder="search a pokémon"
                            className="outline-none p-1 px-2"
                        />
                        <button className="bg-[#D93F3F] text-white px-4">
                            Search
                        </button>
                    </div>
                    <select
                        onChange={handleChangeType}
                        className="outline-none capitalize p-1"
                    >
                        <option value="">All pokemons</option>
                        {pokemonTypes.map((type) => (
                            <option value={type.name} key={type.url}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </form>
            </section>
            <ul className="flex justify-center gap-2">
                {currentPage !== 1 && (
                    <li>
                        <button
                            onClick={handlePreviusPage}
                            className="py-3 px-2 bg-red-600 text-white text-xs"
                        >
                            {"<<"}
                        </button>
                    </li>
                )}
                {pagesInCurrentBlock.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => setCurrentPage(page)}
                            className={`py-2 px-3  ${
                                currentPage === page
                                    ? "bg-red-600 text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                {currentPage !== lastPage && (
                    <li>
                        <button
                            onClick={handleNextPage}
                            className="py-3 px-2 bg-red-600 text-white text-xs"
                        >
                            {">>"}
                        </button>
                    </li>
                )}
            </ul>
            <PokemosList pokemons={itemsInCurrrentPage} />
            <ul className="flex justify-center gap-2 pb-8">
                {currentPage !== 1 && (
                    <li>
                        <button
                            onClick={handlePreviusPage}
                            className="py-3 px-2 bg-red-600 text-white text-xs"
                        >
                            {"<<"}
                        </button>
                    </li>
                )}
                {pagesInCurrentBlock.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => setCurrentPage(page)}
                            className={`py-2 px-3  ${
                                currentPage === page
                                    ? "bg-red-600 text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                {currentPage !== lastPage && (
                    <li>
                        <button
                            onClick={handleNextPage}
                            className="py-3 px-2 bg-red-600 text-white text-xs"
                        >
                            {">>"}
                        </button>
                    </li>
                )}
            </ul>
        </main>
    );
};
export default Pokedex;
