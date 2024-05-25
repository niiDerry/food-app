import { useEffect, useState } from "react";
import styles from "../css/foodDetails.module.css";
import IngredientsList from "./IngredientsList";

export default function FoodDetail({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "68dca29813b2460a8a9cd05f37ba6232";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(!true);
    }
    fetchFood();
  }, [foodID]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            ⏱️<strong>{food.readyInMinutes}:00 </strong> mins
          </span>
          <span>
            👪 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥬 Vegetarian " : " 🥩 Non-Vegetarian "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🥛 Vegan " : " "}</strong>
          </span>
        </div>

        <div>
          <span>
            💲<strong>{Math.round(food.pricePerServing / 100)}</strong> Per
            serving
          </span>
        </div>

        <h2>Ingredients</h2>
        <IngredientsList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
