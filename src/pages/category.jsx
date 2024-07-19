import React, { useState } from "react";
import category_json from "../mock_data/category.json";
import { Box, Header, Input, Page, Select, Slider, Text } from "zmp-ui";
import json from "../mock_data/products.json";

const Category = () => {
  const [category, setCategory] = useState(category_json);
  const [products, setProducts] = useState(json);
  const [baseProducts, setBaseProducts] = useState(json);
  const [choiceCategory, setChoiceCategory] = useState("");

  const filterProduct = (key) => {
    if (key == choiceCategory) {
      setProducts(baseProducts);
      setChoiceCategory("");
    } else {
      setChoiceCategory(key);
      const filteredProducts = baseProducts.filter(
        (product) => product.category.toLowerCase() === key.toLowerCase()
      );
      setProducts(filteredProducts);
    }
  };

  const searchProduct = (text) => {
    const searchedProducts = baseProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(searchedProducts);
  };

  const sortProduct = (sort = "desc") => {
    let new_Products = [...products].sort((a, b) =>
      sort === "desc" ? b.price - a.price : a.price - b.price
    );
    setProducts(new_Products);
  };

  return (
    <>
      <Page className="page padding-lr-0">
        <div>
          <Header
            showBackIcon={false}
            className="text-center text-white bg-customGreen"
            title="Danh mục sản phẩm"
          />
        </div>
        <div className="mb-1 relative mt-8">
          <Input.Search
            label="Tìm kiếm sản phẩm"
            helperText="Helper text"
            clearable="focus"
            placeholder="Tìm kiếm sản phẩm"
            onSearch={(text) => searchProduct(text)}
            onChange={(text) => searchProduct(text)}
            className=""
          />
        </div>
        <div className="max-w-full max-h-full">
          <div className="w-full h-2/5 flex">
            <div className="w-full h-full flex items-center justify-around overflow-x-auto scroll-container">
              {category.length > 0 ? (
                <>
                  {category.map((c) => (
                    <div
                      key={c.key}
                      className="h-1/4 w-24 ml-[2px] mr-[2px]"
                      onClick={() => filterProduct(c.key)}
                    >
                      <div className="shadow-lg bg-white p-3 rounded-lg mt-1 mb-1 relative">
                        <img
                          className="h-4 w-4 object-cover rounded-lg"
                          src={c.image}
                          alt={c.name}
                        />
                        <Text className="">{c.name}</Text>
                        {choiceCategory === c.key ? (
                          <>
                            <div
                              id={c.key}
                              className="h-1 w-full bg-customGreen absolute left-0 right-0 bottom-0 shadow-lg rounded-lg"
                            ></div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div>Không có danh mục</div>
                </>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="h-screen w-1/4 mt-0 bg-white">
              <div className="ml-1">
                <div className="mt-2">
                  <Text.Title size="small">Xếp theo giá</Text.Title>
                </div>
                <hr className="bg-black mt-1" />
                <div>
                  <div
                    className="h-8 mt-5 mb-5"
                    onClick={() => sortProduct("asc")}
                  >
                    Thấp đến cao
                  </div>
                  <hr className="bg-black" />
                  <div
                    className="h-8 mt-5 mb-5"
                    onClick={() => sortProduct("desc")}
                  >
                    Cao đến thấp
                  </div>
                  <hr className="bg-black" />
                </div>
              </div>
            </div>
            <div className="h-full w-3/4 mt-0 bg-white border-b mb-[65px]">
              <div className="flex flex-wrap mt-5">
                {products.length > 0 ? (
                  products.map((p) => (
                    <div
                      key={p.id}
                      className="shadow-lg bg-white m-0 rounded-lg w-[47%] p-3 ml-2 mb-2"
                    >
                      <img
                        className="h-32 w-full object-cover rounded-lg"
                        src={p.photo_url}
                        alt={p.name}
                      />
                      <div>
                        <Text className="mt-2">{p.name}</Text>
                        <Text className="font-bold mt-2 mb-3">
                          Giá: {p.price} đ
                        </Text>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Không có sản phẩm nào</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};
export default Category;
