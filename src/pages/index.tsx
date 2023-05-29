import PageNavigator from "@/components/PageNavigator/PageNavigator";
import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";
import { Pokemon } from "../features/pokemonInterface";
import Loading from "@/components/Loading";

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState<number>(18);
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchPokemon = async () => {
    setLoading(true);
    let pokemonData: Pokemon[] = [];
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    let data = await res.json();

    pokemonData = await Promise.all(
      data.results.map(async (item: any) => {
        return (await fetch(item.url)).json();
      })
    );
    setPokemon(pokemonData);
    setLoading(false);
  };

  const renderCards = () => {
    return pokemon.map((e: Pokemon) => {
      return <Card data={e} key={e.id} />;
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  useEffect(() => {
    setOffset(limit * currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col p-4 min-h-screen max-w-[95vw] sm:max-w-[70vw] md:max-w-[55vw] m-auto">
      <div className="flex items-end mt-4 mb-10 ">
        <h1 className=" font-extrabold text-3xl text-gray-800 ">Pokedex</h1>
        <img className="w-[4rem] object-cover" src="./pokeball.png" alt="" />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {renderCards()}
          </div>
          <div className="flex justify-center m-8">
            <PageNavigator
              currentPage={currentPage}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
