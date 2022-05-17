import stockBuySell from './stockBuySell';

describe('Testing stock buy and sell', () => {
  const stocks = [110, 180, 260, 40, 310, 535, 695];

  it('should output "buy on day 4, sell on day 7"', () => {
    expect(stockBuySell(stocks)).toEqual('buy on day 4, sell on day 7');
  });
});


