import { FetchResult } from "@/pages/pokemon/[pokemonId]";
import React from "react";

const Evolution: React.FC<FetchResult> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-8">
      <img src={data.sprites.back_shiny} alt="" />
      <img src={data.sprites.front_shiny} alt="" />
      <img src={data.sprites.back_default} alt="" />
    </div>
  );
};

export default Evolution;
