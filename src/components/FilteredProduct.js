import React from "react";

function FilteredProduct({ showFiltered, filteredProducts }) {
  return (
    <div>
      {showFiltered && (
        <div className="mb-14 border border-2 border-orange-100 bgCol1 p-2 rounded-2xl">
          <h1 className="mx-4 my-2 md:text-xl sm:text-lg text-md sm:text-start text-end">
            Filtered Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {filteredProducts.map((item) => (
              <div
                key={item.productCategory.orderIndex}
                className="bg-white py-5 px-5 rounded-2xl sm:w-[100%] w-[280px] mx-auto hover:shadow-md"
              >
                <img
                  src={item.productCategory.productCategoryImage}
                  alt=""
                  className="sm:w-[100px] w-[80px] mx-auto"
                />
                <h1 className="text-center mt-4 sm:text-xl text-lg">
                  {item.productCategory.productCategoryName}
                </h1>
              </div>
            ))}
          </div>
          {filteredProducts.length == 0 && (
            <h1 className="text-center w-full text-red-500">
              No products found
            </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default FilteredProduct;
