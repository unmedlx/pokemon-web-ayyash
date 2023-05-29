import { Pokemon } from "@/features/pokemonInterface";
import Link from "next/link";
import React from "react";

interface PokemonCard {
  data: Pokemon;
}

const Card: React.FC<PokemonCard> = (props) => {
  const { data } = props;
  const typeColor = (type: string): string => {
    switch (type) {
      case "grass":
        return "bg-cardGreen";
      case "fire":
        return "bg-cardOrange";
      case "water":
        return "bg-[#74beff]";
      case "electric":
        return "bg-cardYellow";
      default:
        return "bg-slate-400";
    }
  };

  const idStructure = (order: number) => {
    if (order <= 9) {
      return `#00${order}`;
    } else if (order <= 99) {
      return `#0${order}`;
    } else {
      return `#${order}`;
    }
  };

  return (
    <Link
      href={`/pokemon/${data.id}`}
      className={`bg-cardGreen hover:cursor-pointer hover:opacity-90 transition-all duration-200 flex flex-col rounded-2xl shadow-md h-15 aspect-[4/3] ${typeColor(
        data.types[0].type.name
      )}`}
    >
      <div className="flex justify-between mt-2 mx-3">
        <div className="p-1 text-white text-xs sm:text-base capitalize font-bold ">
          {data.name}
        </div>
        <div className="p-1 text-xs sm:text-base text-white font-semibold">
          {idStructure(data.id)}
        </div>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex flex-col my-2 ">
          {data?.types.map((type) => {
            return (
              <div
                key={type.type.name}
                className="rounded-full bg-slate-200 opacity-40 w-fit px-2 py-1 mx-4 my-1"
              >
                <p className="text-[0.6rem] xl:text-xs  capitalize font-bold text-slate-600 opacity-100">
                  {type.type.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col relative z-10 justify-end mr-1">
          <img
            className="w-[8rem]"
            src={data.sprites.front_default}
            alt={data.name}
          />
          <img
            className="w-[5rem] absolute -z-10 sm:left-11 opacity-20 object-fit overflow-hidden"
            src="./pokeball-white.png"
            alt="pokeball"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
