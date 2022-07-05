//import useLocalStorage from 'use-local-storage'

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const BigLogoList = [
  {
    Svg: require("@site/static/img/biglogo.svg").default,
  },
];

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


function BigLogo({ Svg }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a>
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
        <div className="row">
          {BigLogoList.map((props, idx) => (
            <BigLogo key={idx} {...props} />
          ))}

          <someDemo/>

        </div>
      </div>
    </section>
  );
}
