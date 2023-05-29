import { PokemonAbility } from "@/features/pokemonInterface";
import { FetchResult } from "@/pages/pokemon/[pokemonId]";
import React from "react";

const About: React.FC<FetchResult> = ({ data }) => {
  const abilityFormat = (abilities: PokemonAbility[]) => {
    let abilityString: string[] = [];
    abilities.forEach((ability) => {
      let name = ability.ability.name;
      abilityString.push(name.charAt(0).toUpperCase() + name.slice(1));
    });
    return abilityString.join(", ");
  };

  return (
    <div className="text-xs grid grid-cols-3 gap-4">
      <p className="text-sm font-bold text-slate-400">Species</p>
      <p className="text-sm font-bold text-slate-600 col-span-2 capitalize">
        {data.species.name}
      </p>
      <p className="text-sm font-bold text-slate-400">Height</p>
      <p className="text-sm font-bold text-slate-600 col-span-2">
        {data.height} cm ({(data.height / 2.54).toFixed(2)} inch)
      </p>
      <p className="text-sm font-bold text-slate-400">Weight</p>
      <p className="text-sm font-bold text-slate-600 col-span-2">
        {data.weight / 10} kg ({((data.weight / 10) * 2.2046).toFixed(1)} lbs)
      </p>
      <p className="text-sm font-bold text-slate-400">Abilities</p>
      <div className="text-sm font-bold text-slate-600 col-span-2">
        {abilityFormat(data.abilities)}
      </div>
    </div>
  );
};

export default About;
