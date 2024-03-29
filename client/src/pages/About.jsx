import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from '../components/materialUI/organisms';
import {
  // Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
} from '../components/About';

import {
  team, companies,
  // mapData, 
  gallery
} from '../components/About/data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));


export default function About() {
  const classes = useStyles();
  return (
    <div className="px-5">
      <Hero />
      <Section>
        <Story />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Team data={team} />
      </Section>
      <SectionAlternate className={classes.sectionPartners}>
        <Partners data={companies} />
        { /*</SectionAlternate>
      <Contact data={mapData} />
     <SectionAlternate>*/}
        <Gallery data={gallery} />
      </SectionAlternate>
    </div>
  );
}
