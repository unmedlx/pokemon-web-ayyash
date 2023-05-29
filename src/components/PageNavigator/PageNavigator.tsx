interface PaginationProps {
  currentPage: number;
  nextPage: () => any;
  previousPage: () => any;
}

const PageNavigator: React.FC<PaginationProps> = ({
  nextPage,
  previousPage,
  currentPage,
}) => {
  return (
    <div className="flex justify-between items-center bg-slate-900 text-white w-[10rem] rounded-md shadow-lg ">
      <button
        onClick={previousPage}
        className=" text-center py-2 w-8 bg-slate-800 rounded-md"
      >
        {"<"}
      </button>
      <div className="flex">
        <p>{currentPage + 1}</p>
      </div>
      <button
        onClick={nextPage}
        className=" text-center py-2 w-8 bg-slate-800 rounded-md"
      >
        {">"}
      </button>
    </div>
  );
};

export default PageNavigator;
