import React from "react";
import Layout from "@theme/Layout";
import NFT from "@site/src/components/NFT";
const NFTLINK = [{ img_src: require("@site/static/img/impressum/Aleksandar_Dukov.png").default, name :"U found Sketch #44 !"}];

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <NFT NamesList={NFTLINK}  />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "30vh",
          width: "100vw",
          fontSize: "20px",
        }}
      >

          <a href="https://testnets.opensea.io/collection/nft-sketch-collection?search[query]=%2344" target="_blank" rel="noreferrer noopener">
          Opensea link
          </a>
      </div>
          


    </Layout>
  );
}
