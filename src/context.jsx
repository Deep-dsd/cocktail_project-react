import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [formInput, setFormInput] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchingData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${formInput}`);
      const cocktailData = await response.json();
      const { drinks } = cocktailData;

      if (drinks) {
        //here we are just filtering and modifing the drinks items
        const newDrinkList = drinks.map((drink) => {
          const { strDrinkThumb, strGlass, strDrink, strAlcoholic, idDrink } =
            drink;
          return {
            id: idDrink,
            image: strDrinkThumb,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktailList(newDrinkList);
      } else {
        setCocktailList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [formInput]);

  useEffect(() => {
    fetchingData();
  }, [formInput, fetchingData]);
  return (
    <AppContext.Provider
      value={{
        cocktailList,
        setFormInput,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
