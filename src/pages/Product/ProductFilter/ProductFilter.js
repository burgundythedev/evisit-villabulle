import React, { useState } from "react";
import "./ProductFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../../store/slice/storeSlice";
import { FILTER_BY_CATEGORY } from "../../../store/slice/filterSlice";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const allCat = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterCategories = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };
  const clearFilter = () => {
    setCategory("All");
    dispatch(FILTER_BY_CATEGORY({ products, category: "All" }));
  };
  return (
    <div className="filter">
      <h4 className="filter__title">Categories</h4>
      <div className="filter__category">
        <ul className="navbar__list">
          {allCat.map((cat, index) => {
            return (
              <li
                key={index}
                className={
                  category === cat
                    ? "filter__name-cat filter__name-cat--active"
                    : "filter__name-cat"
                }
                onClick={() => {
                  filterCategories(cat);
                }}
              >
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter__button-container">
        <button className="filter__button" onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
