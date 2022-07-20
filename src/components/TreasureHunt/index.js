import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import img_src from "@site/static/img/impressum/Aaron_Vogel.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "@site/static/img/impressum/Aaron_Vogel.png";



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
