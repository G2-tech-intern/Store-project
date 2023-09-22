import "./Hero.css";

import heroImg from "../img/h.png";

function Hero() {
  return (
    // <section className={styles.hero}>
    //   <div className={styles.container}>
    //     <div className={styles.heroText}>
    //       <h1>Hero section</h1>
    //     </div>
    //     <div className={styles.heroImg}>
    //         <img src="./"></img>

    //     </div>
    //   </div>
    // </section>
    <section className="section-hero">
      <div className="hero container">
        <div className="hero-text-box">
          <h1 className="main-heading">Most Awaited Winter Sale Is here</h1>
          <p className="hero-text animated-p">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used
          </p>
        </div>
        <div className="hero-image-box">
          <img src={heroImg} alt="hero " class="hero-img"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
