import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

import { Pokemon } from "@/features/pokemonInterface";
import Loading from "@/components/Loading";
import Jumbotron from "@/components/DetailPage/Jumbotron";
import DetailSection from "@/components/DetailPage/DetailSection";

export interface FetchResult {
  data: Pokemon;
}

const PokemonDetail: React.FC<FetchResult> = ({ data }) => {
  const [loading, isLoading] = useState(false);

  const typeColor = (type: string): string => {
    switch (type) {
      case "grass":
        return "bg-cardGreen";
      case "fire":
        return "bg-cardOrange";
      case "water":
        return "bg-cardBlue";
      case "electric":
        return "bg-[#ffce4b]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div
      className={` w-[100vw] h-screen flex flex-col items-center ${typeColor(
        data.types[0].type.name
      )}`}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-7 sm:mt-10 flex flex-col justify-center items-center ">
          <div className=" w-[20rem] sm:w-[30rem] ">
            <Jumbotron data={data} />
          </div>
          <div className=" w-[20rem] sm:w-[30rem] ">
            <DetailSection data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.pokemonId}`
  );
  const response = await res.json();
  const data = response;

  return {
    props: {
      data,
    },
  };
};
