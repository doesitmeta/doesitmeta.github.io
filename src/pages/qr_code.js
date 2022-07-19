import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "90vh",
          width: "100vw",
          fontSize: "20px",
        }}
      >
        <p margin= "auto">
          This does not work yet. Scan this QR-CODE again at the IfA summer show
          to collect exclusive professor artworks as NFTs.
        </p>
      </div>
    </Layout>
  );
}
