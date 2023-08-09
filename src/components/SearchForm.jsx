import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setFormInput } = useGlobalContext();
  const inputValue = useRef("");
  const searchCocktail = () => {
    setFormInput(inputValue.current.value);
  };

  useEffect(() => {
    inputValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favourite Cocktail</label>
          <input
            type="text"
            id="name"
            ref={inputValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
