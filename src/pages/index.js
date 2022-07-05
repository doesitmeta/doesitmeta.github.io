import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageBigLogo from '@site/src/components/HomepageBigLogo';
//import InstagramEmbed from 'react-instagram-embed';

import styles from './index.module.css';




export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      title={`Hello from TU Berlin`}
      description="Description will go into a meta tag in <head />">
      
      <HomepageBigLogo />
      <HomepageFeatures />
{/*       <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        clientAccessToken='5526557624055956|lf8w2vhYt2d-nWI706sw5BVKDl8'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </Layout>

  );
}
