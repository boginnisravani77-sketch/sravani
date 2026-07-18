import Products from "../components/Products/Products";

function Dairy() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Dairy & Bakery
      </h1>

      <Products category="Dairy" />
    </>
  );
}

export default Dairy;