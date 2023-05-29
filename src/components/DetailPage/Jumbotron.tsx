import { FetchResult } from "@/pages/pokemon/[pokemonId]";
import React from "react";

const Jumbotron: React.FC<FetchResult> = ({ data }) => {
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
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className=" text-3xl text-white capitalize">{data?.name}</p>
          <div className="flex my-2 ">
            {data?.types.map((type) => {
              return (
                <div
                  key={type.type.name}
                  className="rounded-full bg-slate-200 opacity-40 w-fit px-2 py-1 mr-2 "
                >
                  <p className="text-[0.6rem] xl:text-xs  capitalize font-bold text-slate-600 opacity-100">
                    {type.type.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-xl text-white font-bold">{idStructure(data?.id)}</p>
      </div>
      <div className="flex justify-center items-center mt-4 translate-y-0 relative">
        <img
          className="w-[20rem] object-cover z-50"
          src={data?.sprites.front_default}
          alt={data?.name}
        />
        <img
          className="absolute w-4/5 opacity-20"
          src="../pokeball-white.png"
          alt="pokeball"
        />
      </div>
    </>
  );
};

export default Jumbotron;
