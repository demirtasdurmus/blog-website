import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../components/materialUI/organisms';
import { Breadcrumb, Newsletter, Result } from '../components/Blog';

import { breadcrumb, result } from '../components/Blog/data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <div className="px-5">
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Result data={result} />
      <Section>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  );
}
