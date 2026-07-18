import Products from "../components/Products/Products";

function Beverages() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Beverages
      </h1>

      <Products category="Beverages" />
    </>
  );
}

export default Beverages;