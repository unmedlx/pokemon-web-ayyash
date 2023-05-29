import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="container h-[100vh] flex flex-row justify-center items-center">
      <div
        className="inline-block text-slate-700 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
