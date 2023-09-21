import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

import styles from "./Home.module.css"


function HomePage() {
  return (
    <>
    <main className={styles.container}>

      <Hero />
      <h1>Products :</h1>
      <ProductList />
    </main>
    </>
  );
}

export default HomePage;
