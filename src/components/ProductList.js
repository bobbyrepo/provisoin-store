import React from "react";

function ProductList({ product }) {
  return (
    <div className="">
      <h1 className="mx-4 mt-5 md:text-xl sm:text-lg text-md sm:text-start text-end">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {product.map((item) => (
          <div
            key={item.productCategory.orderIndex}
            className="bgCol1 py-5 px-5 rounded-2xl sm:w-[100%] w-[280px] mx-auto hover:shadow-md"
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
    </div>
  );
}

export default ProductList;
