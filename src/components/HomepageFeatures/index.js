import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/docs.svg').default,

  },
  {
    Svg: require('@site/static/img/treasure_1.svg').default,

  },
  {
    Svg: require('@site/static/img/marketplace_1.svg').default,
   
  },
];

function Feature({Svg}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href="/nft_marketplace"> <Svg className={styles.featureSvg} role="img" />
       </a>
       
       </div>  

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
