import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
  },
  {
    id: 2,
    name: "Dairy & Bakery",
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082015.png",
  },
  {
    id: 3,
    name: "Beverages",
    image: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
  },
  {
    id: 4,
    name: "Snacks",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    id: 5,
    name: "Household",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    id: 6,
    name: "Personal Care",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="category-header">
        <h2>Shop By Category</h2>
        <button>View All</button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;