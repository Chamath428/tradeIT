import Alpaca from '@alpacahq/alpaca-trade-api';

const apiKey = process.env['ALPACA_API_KEY_ID'];
const secrectKey = process.env['ALPACA_SECRET_KEY'];

export const alpacaConfig = new Alpaca({
    keyId: apiKey,
    secretKey: secrectKey,
    paper: true,
  })