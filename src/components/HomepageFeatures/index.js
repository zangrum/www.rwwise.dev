import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Resume',
    Svg: require('@site/static/img/resume-icon.svg').default,
    url: 'https://docs.google.com/document/d/1h4_KrisXLRK3DdzxSwdncb11scPcpxq-Q9ZkbH2fnik/export?format=pdf',
    description: (
      <>
         I am a Lead Software Engineer with over 25-years of deep technical experience across multiple domains, technologies and disciplines.
      </>
    ),
  },
  {
    title: 'Personal Projects',
    Svg: require('@site/static/img/noun-terminal-5033098.svg').default,
    url: 'projects/intro',
    description: (
      <>
         My Homelab, AWS, GCP, personal projects and notes.
      </>
    ),
  },
  {
    title: 'My Lego',
    Svg: require('@site/static/img/noun-lego-brick-847725.svg').default,
    url: 'mylego/intro',
    description: (
      <>
        I have collected Lego since I was 3 year's old.
      </>
    ),
  },
  {
    title: 'Table Top Games',
    Svg: require('@site/static/img/noun-board-game-night-1151431.svg').default,
    url: 'tabletopgames/intro',
    description: (
      <>
        I am an avid table top gamer.
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <a href={url}>
        <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
