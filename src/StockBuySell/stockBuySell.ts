/**
 * Task: Given an array of numbers that represent stock prices (where each number is the price for a certain day), find 2 days when you should buy and sell your stock for the highest profit.
 * @see https://buttondown.email/cassidoo/archive/music-touches-us-emotionally-where-words-alone/
 * @param stocks
 */
const stockBuySell = (stocks: number[]) => {
  let buy = 0;
  let sell = stocks.length - 1;
  let biggestDelta = 0;

  for (let i = 0; i < stocks.length; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
      const delta = stocks[j] - stocks[i];
      if (delta > biggestDelta) {
        biggestDelta = delta;
        buy = i;
        sell = j;
      }
    }
  }

  return `buy on day ${buy + 1}, sell on day ${sell + 1}`;
};

export default stockBuySell;
