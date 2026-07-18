import Products from "../components/Products/Products";

function Fruits() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Fruits & Vegetables
      </h1>

      <Products category="Fruits" />
    </>
  );
}

export default Fruits;