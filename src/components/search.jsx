import { useState, useEffect } from "react";
import styles from "../css/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "68dca29813b2460a8a9cd05f37ba6232";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  // syntax of a use effect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
