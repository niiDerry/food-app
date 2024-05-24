export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="food" />
      <h1>{food.title}</h1>
      <button>View recipe</button>
    </div>
  );
}
