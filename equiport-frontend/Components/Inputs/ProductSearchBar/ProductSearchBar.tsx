import React, { useState } from "react";

export interface IProductSearchProps {}

export default function ProductSearch(props: IProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  const onSearch = () => {
    console.log("handleSearch");
  };
  return (
    <div className="product-search">
      <input
        value={searchQuery}
        className="product-search__input"
        placeholder="what are you looking for ?"
        onChange={e => handleSearchChange(e)}
      />
      <button className="product-search__button" onClick={() => onSearch()}>
        <span
          className="iconify"
          data-icon="majesticons:search-line"
          data-width="30"
          data-height="30"
        />
      </button>
    </div>
  );
}
