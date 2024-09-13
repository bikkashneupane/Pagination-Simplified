import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = new Array(20).fill(null);
  const productsPerPage = 4;
  const totalPages = products.length / productsPerPage;

  let pageArray = [];

  for (let x = 0; x < totalPages; x++) {
    pageArray.push(x + 1);
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const pageProducts = products.slice(startIndex, endIndex);

  const previousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  };

  const selectedPage = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[100vh]">
      <h1 className="font-bold text-2xl">Pagination Simplified</h1>
      {/* Products */}
      <div className="grid grid-cols-4 gap-2">
        {pageProducts.map((item, index) => (
          <div
            key={index}
            className="border rounded-md bg-teal-200 h-[150px] w-[150px] flex justify-center items-center font-semibold"
          >
            <h1>Product # {index + startIndex + 1}</h1>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 font-semibold">
        <div
          onClick={previousPage}
          className="h-8 px-4 flex justify-center items-center cursor-pointer rounded bg-gray-200 hover:bg-teal-200"
        >
          {"<<"}
        </div>
        {pageArray.map((item, index) => (
          <div
            key={item + index}
            onClick={() => selectedPage(index)}
            className={`h-8 w-8 flex justify-center items-center cursor-pointer rounded hover:bg-teal-200 ${
              index === currentPage - 1 ? "bg-teal-200" : "bg-gray-200"
            }`}
          >
            {item}
          </div>
        ))}

        <div
          onClick={nextPage}
          className="h-8 px-4 flex justify-center items-center cursor-pointer rounded bg-gray-200 hover:bg-teal-200"
        >
          {">>"}
        </div>
      </div>
    </div>
  );
}

export default App;
