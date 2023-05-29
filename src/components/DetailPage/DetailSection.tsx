import React, { useState } from "react";
import About from "./About";
import { FetchResult } from "@/pages/pokemon/[pokemonId]";
import BaseStats from "./BaseStats";
import Evolution from "./Evolution";
import Move from "./Move";

const DetailSection: React.FC<FetchResult> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-white min-h-[40vh] max-h-[40vh] rounded-xl  px-4 sm:px-8 xl:px-10 overflow-y-scroll">
      <div className="flex flex-row justify-between sticky top-0 bg-white pt-8">
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 1 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(1)}
        >
          <p className="text-sm xl:text-base">About</p>
          {activeTab == 1 ? (
            <hr className="h-1 mx-auto mt-2 mb-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 2 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(2)}
        >
          <p className="text-sm xl:text-base">Base Stats</p>
          {activeTab == 2 ? (
            <hr className="h-1 mx-auto mt-2 mb-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 3 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(3)}
        >
          <p className="text-sm xl:text-base">Evolution</p>
          {activeTab == 3 ? (
            <hr className="h-1 mx-auto mt-2 mb-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 4 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(4)}
        >
          <p className="text-sm xl:text-base">Moves</p>
          {activeTab == 4 ? (
            <hr className="h-1 mx-auto mt-2 mb-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
      </div>
      <div className="mt-3">
        {activeTab == 1 ? (
          <About data={data} />
        ) : activeTab == 2 ? (
          <BaseStats data={data} />
        ) : activeTab == 3 ? (
          <Evolution data={data} />
        ) : activeTab == 4 ? (
          <Move data={data} />
        ) : null}
      </div>
    </div>
  );
};

export default DetailSection;
