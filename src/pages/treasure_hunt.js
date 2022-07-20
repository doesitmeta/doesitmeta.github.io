import React from "react";
import Layout from "@theme/Layout";

import Hunt from "@site/src/components/TreasureHunt";


const NamesList1 = [
  { img_src : require("@site/static/img/treasure_hunt/01.jpg").default, name : ""  } ,
  { img_src : require("@site/static/img/treasure_hunt/06.jpg").default, name : ""  } ,
  { img_src : require("@site/static/img/treasure_hunt/02.jpg").default, name : ""  } ,

];
const NamesList2 = [
  { img_src : require("@site/static/img/treasure_hunt/04.jpg").default, name : ""  } ,
  { img_src : require("@site/static/img/treasure_hunt/07.jpg").default, name : ""  } ,
  { img_src : require("@site/static/img/treasure_hunt/05.jpg").default, name : ""  } ,

];
const NamesList3 = [
  { img_src : require("@site/static/img/treasure_hunt/03.jpg").default, name : ""  } ,

];

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
    <br/>
    <br/>
    <br/>
      <Hunt NamesList={NamesList1} />
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
        <p margin= "auto" >
          Explore a whole new perspective of your surrounding at our AR
          Pavilion. Experience the role of architecture in the digital
          environment and see its potential within the merging of both
          realities. The only thing you need is your Phone.
        </p>


      </div>
      <Hunt NamesList={NamesList3} />
      <br/>
    <br/>
    <br/>
          <Hunt NamesList={NamesList2} />


    </Layout>
  );
}
