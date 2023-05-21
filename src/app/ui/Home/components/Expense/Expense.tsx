import React from 'react';
import { Divider, Grid, Stack, Theme, useMediaQuery } from '@mui/material';

import { home } from 'articles';
import { SxDividerUi } from './styles';
import { Text, Title } from 'app/shared';
import { Expense as ExpenseDomain } from 'types/domain';

type ExpensesProps = ExpenseDomain & { i: number; expenses: ExpenseDomain[] };

export const Expense: React.FC<ExpensesProps> = ({
  descricao,
  categoria,
  dia,
  valor,
  i,
  expenses,
}) => {
  const { expense, category, day, value } = home.table_titles;
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  return (
    <Stack rowGap={0.5}>
      {i === 0 && (
        <Stack>
          <Grid container p={0.5}>
            <Grid item xs={12} sm={3}>
              <Title variant="h2" children={expense} />
            </Grid>
            {!smDown && (
              <Grid item sm={3}>
                <Title variant="h2" children={category} />
              </Grid>
            )}
            {!smDown && (
              <Grid item sm={3}>
                <Title variant="h2" children={day} />
              </Grid>
            )}
            <Grid item xs={12} sm={3}>
              <Title variant="h2" children={value} />
            </Grid>
          </Grid>
          <Divider sx={SxDividerUi} />
        </Stack>
      )}
      {i !== 0 && (
        <Stack>
          <Grid container p={0.5}>
            <Grid item xs={12} sm={3}>
              <Text variant="h3" children={descricao} />
            </Grid>
            {!smDown && (
              <Grid item sm={3}>
                <Text variant="h3" children={categoria} />
              </Grid>
            )}
            {!smDown && (
              <Grid item sm={3}>
                <Text variant="h3" children={dia} />
              </Grid>
            )}
            <Grid item xs={12} sm={3}>
              <Text variant="h3" children={valor.toLocaleString('pt-BR')} />
            </Grid>
          </Grid>
          {expenses.length - 1 !== i && <Divider sx={SxDividerUi} />}
        </Stack>
      )}
    </Stack>
  );
};
