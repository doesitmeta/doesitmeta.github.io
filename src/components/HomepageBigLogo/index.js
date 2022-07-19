

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const BigLogoList = [
  {
    Svg: require("@site/static/img/biglogo.svg").default,
  },
];



function BigLogo({ Svg }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href="/#features">
          <Svg className={styles.bigLogoSvg} role="img" /> 
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        
        <div className="row" >
          {BigLogoList.map((props, idx) => (
            <BigLogo key={idx} {...props} />
          ))}

          

        </div>
      </div>
    </section>
  );
}
