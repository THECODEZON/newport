import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (

    
    <section className={styles.container}>
      
      
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepa</h1>
        <p className={styles.description}>
          I'm a full-stack developer with react.js and node.js experience.
       

        </p>
        <a href="mailto:ddas12181@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/meh.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
