import styles from "../css/foodItem.module.css";

export default function FoodItem({ food, setFoodID }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="food" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            console.log(food.id);
            setFoodID(food.id);
          }}
        >
          View recipe
        </button>
      </div>
    </div>
  );
}
