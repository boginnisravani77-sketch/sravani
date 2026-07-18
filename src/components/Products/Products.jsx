import ProductCard from "./ProductCard";
import "./Products.css";

function Products({ category }) {

  const products = [

    // Fruits & Vegetables
    {
      id:1,
      name:"Banana",
      category:"Fruits",
      price:40,
      image:"https://picsum.photos/200?1",
    },

    {
      id:2,
      name:"Apple",
      category:"Fruits",
      price:120,
      image:"https://picsum.photos/200?2",
    },

    {
      id:3,
      name:"Carrot",
      category:"Fruits",
      price:50,
      image:"https://picsum.photos/200?3",
    },

    {
      id:4,
      name:"Potato",
      category:"Fruits",
      price:35,
      image:"https://picsum.photos/200?4",
    },

    {
      id:5,
      name:"Tomato",
      category:"Fruits",
      price:45,
      image:"https://picsum.photos/200?5",
    },

    // Dairy

    {
      id:6,
      name:"Milk",
      category:"Dairy",
      price:60,
      image:"https://picsum.photos/200?6",
    },

    {
      id:7,
      name:"Cheese",
      category:"Dairy",
      price:180,
      image:"https://picsum.photos/200?7",
    },

    {
      id:8,
      name:"Butter",
      category:"Dairy",
      price:90,
      image:"https://picsum.photos/200?8",
    }

  ];

  const filteredProducts =
    category === "Home" || !category
      ? products
      : products.filter(
          (item) => item.category === category
        );

  return (

    <section className="products">

      <h2>

        {category === "Home" || !category
          ? "Featured Products"
          : category}

      </h2>

      <div className="products-grid">

        {filteredProducts.map((item)=>(

          <ProductCard
            key={item.id}
            product={item}
          />

        ))}

      </div>

    </section>

  );

}

export default Products;