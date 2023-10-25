import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/pokedex/Header";
import { bgByType, bgToPokemonInfo } from "../constants/pokemonColor";

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState(null);

    const { pokemonId } = useParams();

    const getpPercentStat = (statValue) => {
        const MAX_STAT_VALUE = 255;
        const percentStat = ((statValue * 100) / MAX_STAT_VALUE).toFixed(1);
        return `${percentStat}%`;
    };

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));
    }, []);

    console.log(pokemon);
    return (
        <main >
            <Header />
            <article className="border-4 m-6 mt-16 pb-16 text-center capitalize max-w-[1000px] md:w-[700px] md:mx-auto md:mt-32 lg:w-[1000px]">
                <header className={`h-24 ${bgByType[pokemon?.types[0].type.name]} relative`}>
                    <img
                        src={
                            pokemon?.sprites.other["official-artwork"]
                                .front_default
                        }
                        alt=""
                        className="absolute w-[150px] md:w-[250px] -top-16 right-1/2 translate-x-1/2"
                    />
                </header>
                <h3 className="p-1 md:pt-24 md:text-xl">#{pokemon?.id}</h3>
                
                <h2 className="relative font-bold text-2xl md:text-3xl">{pokemon?.name}</h2>

                <div className="flex justify-center gap-3 py-6">
                    <p className="grid text-xs md:text-base">
                        weight
                        <span className="font-bold">{pokemon?.weight}</span>
                    </p>
                    <p className="grid text-xs md:text-base">
                        height
                        <span className="font-bold">{pokemon?.height}</span>
                    </p>
                </div>

                <div className="grid justify-center gap-4 py-6 sm:flex">
                    <div className=" grid gap-4">
                        <h4>type</h4>
                        <ul className="flex justify-center gap-2">
                            {pokemon?.types.map((type) => (
                                <li className={`${bgToPokemonInfo[type.type.name]} w-[100px] text-white rounded-sm`} key={type.type.url}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className=" grid gap-4">
                        <h4>abilities</h4>
                        <ul className="flex justify-center gap-2">
                            {pokemon?.abilities.map((ability) => (
                                <li className="border w-[100px] rounded-sm" key={ability.ability.url}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                
                </div>
                <section className="px-4 md:w-[500px] md:mx-auto">
                    <h3>stats</h3>
                    <ul>
                        {pokemon?.stats.map((stat) => (
                            <li key={stat.stat.name}>
                                <div className="flex justify-between">
                                    <h5>{stat.stat.name}</h5>
                                    <span>{stat.base_stat}/255</span>
                                </div>
                                <div className="bg-slate-300 h-8 rounded-md overflow-hidden">
                                    <div
                                        style={{
                                            width: getpPercentStat(
                                                stat.base_stat
                                            ),
                                        }}
                                        className="h-full bg-gradient-to-r from-yellow-300 to-yellow-600"
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>

            <article className="max-w-[1000px] mx-auto border-2 flex gap-4 flex-wrap p-4 justify-start">
                <h2 className="w-full text-2xl h-12">Movements</h2>
                {
                    pokemon?.moves.map((move) => (
                        <li key={move.move.url} className="list-none border-2 py-1 px-2 bg-slate-300 rounded-2xl capitalize">{move.move.name}</li>
                    ))
                }
            </article>
        </main>
    );
};
export default PokemonInfo;
