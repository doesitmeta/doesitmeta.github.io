import React from "react";
import Layout from "@theme/Layout";

import Impressum from "@site/src/components/Impressum";


const NamesList1 = [
  { img_src : require("@site/static/img/impressum/Moritz_Maria_Karl.png").default, name : "Moritz_Maria_Karl"} ,
  { img_src : require("@site/static/img/impressum/Aaron_Vogel.png").default, name : "Aaron_Vogel"} ,
  { img_src : require("@site/static/img/impressum/Akmal_Yusupov.png").default, name : "Akmal_Yusupov"} ,
  { img_src : require("@site/static/img/impressum/Aleksandar_Dukov.png").default, name : "Aleksandar_Dukov"} ,
  { img_src : require("@site/static/img/impressum/Alfiya_vitvitskaya.png").default, name : "Alfiya_vitvitskaya"} ,
];
const NamesList2 = [
  { img_src : require("@site/static/img/impressum/Alina_Vanessa_Schön.png").default, name : "Alina_Vanessa_Schön"} ,
  { img_src : require("@site/static/img/impressum/Ali-Seymen_Tigrakli.png").default, name : "Ali-Seymen_Tigrakli"} ,
  { img_src : require("@site/static/img/impressum/Anna-Maria_Lozovan.png").default, name : "Anna-Maria_Lozovan"} ,
  { img_src : require("@site/static/img/impressum/Anna_Moenke.png").default, name : "Anna_Moenke"} ,
  { img_src : require("@site/static/img/impressum/Antonia_Walz.png").default, name : "Antonia_Walz"} ,
];
const NamesList3 = [
  { img_src : require("@site/static/img/impressum/Ayman_El-Sakrane.png").default, name : "Ayman_El-Sakrane"} ,
  { img_src : require("@site/static/img/impressum/Bo_Schweimler.png").default, name : "Bo_Schweimler"} ,
  { img_src : require("@site/static/img/impressum/Carl_Lucas_Moehring.png").default, name : "Carl_Lucas_Moehring"} ,
  { img_src : require("@site/static/img/impressum/Caro_Hermann.png").default, name : "Caro_Hermann"} ,
  { img_src : require("@site/static/img/impressum/Celestine_rose.png").default, name : "Celestine_rose"} ,
];
const NamesList4 = [
  { img_src : require("@site/static/img/impressum/Charlotte_schink.png").default, name : "Charlotte_schink"} ,
  { img_src : require("@site/static/img/impressum/Connor_Sisett.png").default, name : "Connor_Sisett"} ,
  { img_src : require("@site/static/img/impressum/Danercia_da_Cunha_Braganca.png").default, name : "Danercia_da_Cunha_Braganca"} ,
  { img_src : require("@site/static/img/impressum/Edzhe_Ayyaldaz.png").default, name : "Edzhe_Ayyaldaz"} ,
  { img_src : require("@site/static/img/impressum/Hamza_Messaoudi.png").default, name : "Hamza_Messaoudi"} ,
];
const NamesList5 = [
  { img_src : require("@site/static/img/impressum/Hanna_Greeves.png").default, name : "Hanna_Greeves"} ,
  { img_src : require("@site/static/img/impressum/Jakob_Holtz.png").default, name : "Jakob_Holtz"} ,
  { img_src : require("@site/static/img/impressum/Jessica_Zollna.png").default, name : "Jessica_Zollna"} ,
  { img_src : require("@site/static/img/impressum/Julia_Bakucz.png").default, name : "Julia_Bakucz"} ,
  { img_src : require("@site/static/img/impressum/Kevin_Tornau.png").default, name : "Kevin_Tornau"} ,
];
const NamesList6 = [
  { img_src : require("@site/static/img/impressum/Len_Focken.png").default, name : "Len_Focken"} ,
  { img_src : require("@site/static/img/impressum/Madina_Dahtaeva.png").default, name : "Madina_Dahtaeva"} ,
  { img_src : require("@site/static/img/impressum/Mia_Evron.png").default, name : "Mia_Evron"} ,
  { img_src : require("@site/static/img/impressum/Minji_kim.png").default, name : "Minji_kim"} ,
  { img_src : require("@site/static/img/impressum/Nicolas_Weber_Colussi.png").default, name : "Nicolas_Weber_Colussi"} ,
];
const NamesList7 = [
  { img_src : require("@site/static/img/impressum/Noa_Kirsch.png").default, name : "Noa_Kirsch"} ,
  { img_src : require("@site/static/img/impressum/Radostina_Hristova.png").default, name : "Radostina_Hristova"} ,
  { img_src : require("@site/static/img/impressum/Sandra_Urthel.png").default, name : "Sandra_Urthel"} ,
  { img_src : require("@site/static/img/impressum/Sarah_Moeller.png").default, name : "Sarah_Moeller"} ,
  { img_src : require("@site/static/img/impressum/Sarah_Schaeffner.png").default, name : "Sarah_Schaeffner"} ,
];
const NamesList8 = [
  { img_src : require("@site/static/img/impressum/Sergei_Glushchenko.png").default, name : "Sergei_Glushchenko"} ,
  { img_src : require("@site/static/img/impressum/Stefan_Gehrt.png").default, name : "Stefan_Gehrt"} ,
  { img_src : require("@site/static/img/impressum/Talia_Tsuk.png").default, name : "Talia_Tsuk"} ,
  { img_src : require("@site/static/img/impressum/Valesa_Petkova.png").default, name : "Valesa_Petkova"} ,
  { img_src : require("@site/static/img/impressum/Vanessa_Rodriguez.png").default, name : "Vanessa_Rodriguez"} ,
];
const NamesList9 = [
  { img_src : require("@site/static/img/impressum/Vincent_Jetzinger.png").default, name : "Vincent_Jetzinger"} ,
  { img_src : require("@site/static/img/impressum/Yoel_Gaft.png").default, name : "Yoel_Gaft"} ,
  { img_src : require("@site/static/img/impressum/Yotam_Berkovitz.png").default, name : "Yotam_Berkovitz"} ,
  { img_src : require("@site/static/img/impressum/placeholder.png").default, name : ""} ,
  { img_src : require("@site/static/img/impressum/placeholder.png").default, name : ""} ,

];






export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div

      >
        <Impressum NamesList={NamesList1} />
        <Impressum NamesList={NamesList2} />
        <Impressum NamesList={NamesList3} />
        <Impressum NamesList={NamesList4} />
        <Impressum NamesList={NamesList5} />
        <Impressum NamesList={NamesList6} />
        <Impressum NamesList={NamesList7} />
        <Impressum NamesList={NamesList8} />
        <Impressum NamesList={NamesList9} />

       
        


      </div>
    </Layout>
  );
}
