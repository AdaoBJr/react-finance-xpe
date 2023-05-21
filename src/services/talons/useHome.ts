import { ChangeEvent, useMemo, useRef, useState } from 'react';

import { home } from 'articles';
import { GetFinances } from 'types/domain';
import { useFinancesApi } from 'services/infra';
import homeAnimation from 'assets/animations/home.json';
import loadingAnimation from 'assets/animations/loading.json';
import { AnimationProps, DropdownProps, TextProps } from 'types/shared';

interface DropValues {
  [name: string]: string;
}
const initialValues: DropValues = { year: '', month: '' };
const formatCurrency = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
};
export const useHome = () => {
  const { dropdown } = home;
  const { getFinancesByDate } = useFinancesApi();

  const dropValue = useRef(initialValues);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GetFinances | null>(null);

  const getData = async (date: string) => {
    const response = await getFinancesByDate(date);
    setLoading(false);
    setData(response);
  };

  const handleSelectOnChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    dropValue.current[name] = value;
    const date = Object.values(dropValue.current);

    if (date.every(Boolean)) {
      setLoading(true);
      getData(date.join(''));
    }
  };

  const totalValue = useMemo(
    () =>
      data
        ?.reduce((acc, curr) => acc + curr.valor, 0)
        .toLocaleString('pt-BR', formatCurrency),
    [data]
  );

  const showAnimation = useMemo(() => !data?.length, [data]);

  const compProps = useMemo(
    () => ({
      animation: {
        animation: loading ? loadingAnimation : homeAnimation,
        alt: 'animação-home',
        center: true,
        width: '300px',
      } as AnimationProps,
      dropdown: {
        year: {
          name: 'year',
          defaultValue: '',
          label: !dropValue.current.year && dropdown.year.placeholder,
          fullWidth: true,
          options: dropdown.year.items,
          onChange: handleSelectOnChange,
        } as DropdownProps,
        month: {
          name: 'month',
          defaultValue: '',
          label: !dropValue.current.month && dropdown.month.placeholder,
          fullWidth: true,
          options: dropdown.month.items,
          onChange: handleSelectOnChange,
        } as DropdownProps,
      },
      totalValue: {
        title: {
          variant: 'h3',
          fontWeight: 400,
          children: home.total,
        } as TextProps,
        value: {
          variant: 'h2',
          fontWeight: 700,
          children: totalValue,
        } as TextProps,
      },
    }),
    [loading, dropValue.current, totalValue]
  );

  return { data, showAnimation, compProps };
};
