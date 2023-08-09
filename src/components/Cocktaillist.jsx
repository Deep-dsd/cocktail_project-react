import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const Cocktaillist = () => {
  const { cocktailList, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktailList.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <section className="cocktails-center">
        {cocktailList.map((cocktail) => {
          const { id } = cocktail;
          return <Cocktail {...cocktail} key={id} />;
        })}
      </section>
    </section>
  );
};

export default Cocktaillist;
