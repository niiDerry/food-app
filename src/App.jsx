import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "../src/css/App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  return (
    <div className="App">
      <Nav />

      <Search foodData={foodData} setFoodData={setFoodData} />

      {/*nesting component*/}
      <Container>
        {/*parent component is the container and FoodList is the child*/}
        <InnerContainer>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
