import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Iframe from "react-iframe";

const FeatureList = [
  {
    Svg1: require("@site/static/img/docs.svg").default,
    Svg2: require("@site/static/img/docs_1.svg").default,
    link: "/docs/Tutorial",
  },
  {
    Svg1: require("@site/static/img/treasure_1.svg").default,
    link: "treasure_hunt",
  },
  {
    Svg1: require("@site/static/img/marketplace_1.svg").default,
    link: "https://testnets.opensea.io/collection/nft-sketch-collection",
    newtab_target: "_blank",
    newtab_rel: "noreferrer noopener",
  },
];

function Feature({ Svg1, Svg2, link, newtab_target, newtab_rel }) {

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={link} target={newtab_target} rel={newtab_rel}>
          <Svg1 className={styles.featureSvg} role="img"
          />
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
