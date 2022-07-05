import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    Svg: require("@site/static/img/docs.svg").default,
    link: "/docs/meta",
  },
  {
    Svg: require("@site/static/img/treasure_1.svg").default,
    link: "treasure_hunt",
  },
  {
    Svg: require("@site/static/img/marketplace_1.svg").default,
    link: "https://doesitmeta.github.io/marketplace/",
    newtab_target: "_blank",
    newtab_rel: "noreferrer noopener",
  },
];

function Feature({ Svg, link, newtab_target, newtab_rel }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={link} target={newtab_target} rel={newtab_rel}>
          <Svg className={styles.featureSvg} role="img" />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>


      </div>
    </section>
  );
}
