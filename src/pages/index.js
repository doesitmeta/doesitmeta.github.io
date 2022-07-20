import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageBigLogo from "@site/src/components/HomepageBigLogo";
import InstagramFeed from "@site/src/components/HomeIgFeed";
import InstagramEmbed from "react-instagram-embed";

import styles from "./index.module.css";

import Iframe from "react-iframe";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      title={`Hello from TU Berlin`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageBigLogo />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <p margin="auto">
            0/200  NFTs have been minted! 
          </p>
        </div>
      </div>
      <br id="features" />
      <HomepageFeatures />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <p margin="auto">
            check us out on ig{" "}
            <a href="https://instagram.com/doesitmeta_tuberlin">
              @doesitmeta_tuberlin
            </a>{" "}
            ;)
          </p>
        </div>
      </div>
      <br />

      <InstagramFeed
        token="IGQVJVQXVpLW9BSTZA6NnJmSllZAZAGphRkViVS1LQXZArcTh4RGh4MDlqV0ZADMUREWG1SUV8tUmh3OTNpR0x3cC1XMldPTXFZATkFqNUlsQTNKQWdhYXVZAX2JfSTJ3UDZAZAQTM5ODZAXRlMzRDM1SFZAFdExLQgZDZD"
        counter="30"
      />

      <br />
      <br />
      <br />
    </Layout>
  );
}
