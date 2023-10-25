import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgByType, borderByType, textColorByType } from "../../constants/pokemonColor";

const PokemonCard = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Link to={`/pokedex/${pokemon?.id}`} className={`border-8 rounded-lg ${borderByType[pokemon?.types[0].type.name]} grid justify-center`}>
            <div className={`${bgByType[pokemon?.types[0].type.name]} w-[264px] h-[120px] relative`}>
                <img
                    src={
                        pokemon?.sprites.other["official-artwork"].front_default
                    }
                    alt=""
                    className="w-[150px] absolute top-5 right-1/2 translate-x-1/2"
                />
            </div>
            <div className="text-center py-10 pb-6 capitalize">
                <h2 className={`font-bold text-2xl ${textColorByType[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h2>
                <p>{pokemon?.types.map((type) => type.type.name).join(" / ")}</p>
                <span className="text-sm text-[#9F9F9F] ">type</span>
                <ul className="grid grid-cols-2 border-t border-[#e5e5e5] mt-2 pt-3">
                    <li className="uppercase grid text-[#9F9F9F]">hp <span className={`${textColorByType[pokemon?.types[0].type.name]} font-semibold`}>{pokemon?.stats[0].base_stat}</span></li>
                    <li className="uppercase grid text-[#9F9F9F]">attack <span className={`${textColorByType[pokemon?.types[0].type.name]} font-semibold`}>{pokemon?.stats[1].base_stat}</span></li>
                    <li className="uppercase grid text-[#9F9F9F]">defense <span className={`${textColorByType[pokemon?.types[0].type.name]} font-semibold`}>{pokemon?.stats[2].base_stat}</span></li>
                    <li className="uppercase grid text-[#9F9F9F]">speed <span className={`${textColorByType[pokemon?.types[0].type.name]} font-semibold`}>{pokemon?.stats[5].base_stat}</span></li>
                </ul>
            </div>
        </Link>
    );
};
export default PokemonCard;
