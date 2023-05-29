import { FetchResult } from "@/pages/pokemon/[pokemonId]";
import React from "react";

const Move: React.FC<FetchResult> = ({ data }) => {
  return (
    <div>
      {data.moves.map((move) => {
        return (
          <div className="border-2 my-1 px-3 py-2 rounded-md">
            <p className="capitalize text-sm font-extrabold text-slate-400">
              {move.move.name}
            </p>
            {move.version_group_details.map((details) => {
              return (
                <div className="grid grid-cols-8 text-sm font-light my-2">
                  <div className="flex flex-row items-center gap-2">
                    <p className="font-extrabold text-xs text-cardBlue">Lv</p>
                    <p className="font-medium text-xs capitalize text-slate-400">
                      {details.level_learned_at}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2 col-span-2">
                    <p className="font-medium text-xs capitalize text-slate-400">
                      {details.move_learn_method.name}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2 col-span-5">
                    <p className="font-medium text-xs capitalize text-slate-400">
                      {details.version_group.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Move;
