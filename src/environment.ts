const dev = process.env.NODE_ENV === 'development' && 'dev';
const prd = process.env.NODE_ENV === 'production' && 'prd';
const test = process.env.NODE_ENV === 'test' && 'test';

export type Environment = 'dev' | 'prd' | 'test';

export const getEnv = () => ({
  ENV: [dev, prd, test].find(Boolean)! as Environment,
  URL_BASE: prd
    ? 'https://finance-db-xpe.vercel.app/data'
    : 'http://localhost:4000/despesas',
});
