import { api } from '../api';
import { getEnv } from 'environment';
import { GetFinances } from 'types/domain';

export const useFinancesApi = () => {
  const { URL_BASE } = getEnv();

  const getFinancesByDate = async (date: string) => {
    const res = await api.get<GetFinances>(`${URL_BASE}?mes=${date}&_sort=dia`);
    return res.data;
  };

  return { getFinancesByDate };
};
