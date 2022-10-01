import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../components/materialUI/organisms';
import {
  GetStarted, Features,
  // Reviews, QuickStart, 
  Services, Hero
} from '../components/homePage';



const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default function Home() {

  const classes = useStyles();

  return (
    <div className="px-5">
      <Hero themeMode="dark" />
      <Services />
      {/*<SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
  </SectionAlternate>*/}
      <SectionAlternate>
        <Features />
      </SectionAlternate>
      {/*<Section>
        <Reviews />
      </Section>*/}
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted />
      </Section>
    </div>
  );
};

