import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/storeImg.jpg";
import FilteredProduct from "../components/FilteredProduct";
import ProductList from "../components/ProductList";
import axios from "axios";

function Home() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [showFiltered, setShowFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    axios
      .get("https://api.kalpav.com/api/v1/product/category/retail", {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.response);
        setProduct(res.data.response);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      setShowFiltered(true);
      const filtered = product.filter((item) =>
        item.productCategory.productCategoryName
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    } else setShowFiltered(false);
  }, [search]);

  return (
    <>
      <div
        className="relative sm:h-[500px] h-[300px]"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="absolute bg-gray-600 opacity-50 w-full h-full"></div>
        <img
          src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] mx-auto z-90"
          alt=""
        />
      </div>

      <div className="sm:w-[90%] w-[95%] mx-auto my-10">
        <div className="sm:flex items-center justify-between mb-4">
          <h1 className="text-center w-fit md:text-3xl sm:text-2xl text-xl font-medium  ">
            Products
          </h1>
          <div className="flex sm:flex-col gap-2 sm:my-0 my-2 sm:items-end items-center md:text-xl sm:text-lg">
            <h1>Filter:</h1>
            <input
              type="text"
              placeholder="search by name"
              className="border px-2 py-1 rounded-lg focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <FilteredProduct
          showFiltered={showFiltered}
          filteredProducts={filteredProducts}
        />
        <ProductList product={product} />
      </div>
    </>
  );
}

export default Home;
