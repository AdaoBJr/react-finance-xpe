import React from 'react';
import { Grid } from '@mui/material';

import { BodyHome } from './components';
import { useHome } from 'services/talons';
import { Animation, Dropdown, Row, Text } from 'app/shared';

export const Home: React.FC = () => {
  const {
    showAnimation,
    compProps: {
      animation,
      dropdown: { year, month },
      totalValue,
    },
  } = useHome();

  return (
    <BodyHome>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Row columnGap={0.5}>
            <Dropdown {...year} />
            <Dropdown {...month} />
          </Row>
        </Grid>
        {totalValue.value.children && (
          <Grid item xs={12} sm={6}>
            <Row columnGap={0.25}>
              <Text {...totalValue.title} />
              <Text {...totalValue.value} />
            </Row>
          </Grid>
        )}
        {showAnimation && (
          <Grid item xs={12}>
            <Animation {...animation} />
          </Grid>
        )}
      </Grid>
    </BodyHome>
  );
};
