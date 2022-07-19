import React from "react";
import Layout from "@theme/Layout";
import Iframe from "react-iframe";
import styles from "./index.module.css";
import ReactPlayer from "react-player"
export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
{/*       <Iframe
        className="flexwrap"
        url="https://www.youtube.com/embed/wobZgKRkE18"
        position="absolute"
        width="100%"
        id="myId"
        height="50%"
        display="flex"
        allowFullScreen
      /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "95vh",
          width: "100vw",
          fontSize: "20px",
        }}
      >
        <p margin= "auto">
          Explore a whole new perspective of your surrounding at our AR
          Pavilion. Experience the role of architecture in the digital
          environment and see its potential within the merging of both
          realities. The only thing you need is your Phone.
        </p>

      </div>
          <div className='player-wrapper' margin= "auto">
            <ReactPlayer
              
              className='react-player'
              width='100%'
              height='400px'
              margin= "auto"
              url="https://www.youtube.com/embed/wobZgKRkE18"
              
              />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </Layout>
  );
}
