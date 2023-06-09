import React from 'react';
import { Divider, Grid } from '@mui/material';

import { BodyHome, Expense, TotalByCategory } from './components';
import { useHome } from 'services/talons';
import { Animation, Dropdown, Row, Text } from 'app/shared';

export const Home: React.FC = () => {
  const {
    data,
    showAnimation,
    totalByCategory,
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
        {!showAnimation && data && (
          <>
            <Grid item xs={12}>
              {totalByCategory!.map(({ categoria, total }, i) => (
                <TotalByCategory
                  key={categoria}
                  i={i}
                  category={categoria}
                  totalValue={total}
                />
              ))}
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{
                  borderBottomWidth: '2px',
                  borderColor: 'grey.500',
                  margin: '2rem 0',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {data.map((expense, i, array) => (
                <Expense key={expense.id} i={i} expenses={array} {...expense} />
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </BodyHome>
  );
};
