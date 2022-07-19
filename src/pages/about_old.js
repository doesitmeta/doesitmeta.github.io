import React from "react";
import Layout from "@theme/Layout";
import Impressum from "@site/src/components/Impressum";
import styles from "./index.module.css";

import { ImageViewer } from "react-image-viewer-dv";
import img from "@site/static/img/impressum/Aaron_Vogel.png";

import ReactDOM from "react-dom";

const name = "aaronaaron"

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          fontSize: "20px",
        }}
      >
        <div className="container" textAlign='center'>
          <ImageViewer>
            <img src={img} alt="name" className={styles.featureSvg} />
          </ImageViewer>
          <a>{name}</a>
        </div>

        




      </div>
    </Layout>
  );
}
