import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import img_src from "@site/static/img/impressum/Aaron_Vogel.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "@site/static/img/impressum/Aaron_Vogel.png";

/* 
var context = require.context('@site/static/img/impressum/', true, /\.(png)$/).default;

var files={};

context.keys().forEach((filename)=>{
  files[filename] = context(filename);
});



console.log(files["./Akmal_Yusupov.png"])

 */

const NamesList1 = [
  {
    img_src: require("@site/static/img/impressum/Aaron_Vogel.png").default,
    name: "Aaron_Vogel",
  },
  {
    img_src: require("@site/static/img/impressum/Akmal_Yusupov.png").default,
    name: "Akmal_Yusupov",
  },
  {
    img_src: require("@site/static/img/impressum/Aleksandar_Dukov.png").default,
    name: "Aleksandar_Dukov",
  },
  {
    img_src: require("@site/static/img/impressum/Ali-Seymen_Tigrakli.png")
      .default,
    name: "Ali-Seymen_Tigrakli",
  },
  {
    img_src: require("@site/static/img/impressum/Anna-Maria_Lozovan.png")
      .default,
    name: "Anna-Maria_Lozovan",
  },
];

const NamesList2 = [
  {
    img_src: require("@site/static/img/impressum/Aaron_Vogel.png").default,
    name: "Aaron_Vogel",
  },
  {
    img_src: require("@site/static/img/impressum/Akmal_Yusupov.png").default,
    name: "Akmal_Yusupov",
  },
  {
    img_src: require("@site/static/img/impressum/Aleksandar_Dukov.png").default,
    name: "Aleksandar_Dukov",
  },
  /*   { img_src : require("@site/static/img/impressum/Ali-Seymen_Tigrakli.png").default, name : "Ali-Seymen_Tigrakli"} ,
  { img_src : require("@site/static/img/impressum/Anna-Maria_Lozovan.png").default, name : "Anna-Maria_Lozovan"} ,
  { img_src : require("@site/static/img/impressum/Anna_Moenke.png").default, name : "Anna_Moenke"} , */
];

function Feature({ img_src, name }) {
  return (
    <Col>
      <div className="text--center">
        <img src={img_src} className={styles.featureSvg} />

        <br />
        <a className={styles.featureSvgText}>{name}</a>
      </div>
    </Col>
  );
}

export default function Hunt({NamesList}) {
  return (
    <section className={styles.features}>
      <Container>
        <Row>
          {NamesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
