import Hero from "../components/Hero/Hero";
import PromoSection from "../components/PromoSection/PromoSection";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

function Home() {
  return (
    <>
      <Hero />
      <PromoSection />
      <Categories />
      <Products />
    </>
  );
}

export default Home;