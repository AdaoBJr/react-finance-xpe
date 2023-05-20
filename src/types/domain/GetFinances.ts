export interface Expenses {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export type GetFinances = Expenses[];
