import React from 'react';
import { Divider, Grid, Stack } from '@mui/material';

import { Text, Title } from 'app/shared';
import { SxDividerUi, SxValorUi } from './styles';

interface TotalByCategoryProps {
  category: string;
  totalValue: number;
  i: number;
}
const formatCurrency = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
};

export const TotalByCategory: React.FC<TotalByCategoryProps> = ({
  category,
  totalValue,
  i,
}) => {
  return (
    <Stack rowGap={0.5}>
      {i === 0 && (
        <Stack>
          <Grid container p={0.75}>
            <Grid item xs={6}>
              <Title variant="h2" children={'Categoria'} />
            </Grid>

            <Grid item xs={6} sx={SxValorUi}>
              <Title variant="h2" children={'Valor (R$)'} />
            </Grid>
          </Grid>
          <Divider sx={SxDividerUi} />
        </Stack>
      )}
      {i !== 0 && (
        <Stack>
          <Grid container p={0.75}>
            <Grid item xs={6}>
              <Text variant="h3" children={category} />
            </Grid>

            <Grid item xs={6} sx={SxValorUi}>
              <Text
                variant="h3"
                children={totalValue.toLocaleString('pt-BR', formatCurrency)}
              />
            </Grid>
          </Grid>
          <Divider sx={SxDividerUi} />
        </Stack>
      )}
    </Stack>
  );
};
