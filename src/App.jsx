import { useState } from "react";

import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PromoSection from "./components/PromoSection/PromoSection";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [category, setCategory] = useState("Home");
  console.log(category);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <>
      <Header />

      <Navbar setCategory={setcategory} />

      <Hero />
      <PromoSection />
      <Categories />

      <Products category={category} />
      
 

      <Footer />
    </>
  );
}

export default App;