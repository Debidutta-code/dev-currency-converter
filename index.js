import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_bA7jelGqmgnWEbjhILorhH3ddp3dEBwDSSbt0Pv6');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}

