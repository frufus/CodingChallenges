/**
 * Task: Given an int array coins and an int amount, return an array of coins that add up to amount (and an empty array if it’s an impossible combination).
 * @see https://buttondown.email/cassidoo/archive/dont-get-bitter-just-get-better-alyssa-edwards/
 * @param coins
 * @param amount
 */
const coinCombo = (coins: number[], amount: number) => {
    const sortedCoins = coins.sort((a, b) => b - a);

    return recCoinCombo(sortedCoins, amount, [], 0);
};

const recCoinCombo = (sortedCoins: number[], amount: number, result: number[], index: number) => {
    const currCoin = sortedCoins[index];
    const newAmount = amount - currCoin;
    if (newAmount > 0) {
        return recCoinCombo(sortedCoins, newAmount, [...result, currCoin], index)
    } else if (newAmount === 0) {
        return [...result, currCoin]
    }

    if (index + 1 <= sortedCoins.length - 1) {
        return recCoinCombo(sortedCoins, amount, result, index + 1);
    }
    if (sortedCoins.length > 0) {
        const lastCoin = result[result.length - 1];
        const indexInCoins = sortedCoins.indexOf(lastCoin);
        if (indexInCoins > -1) {
            sortedCoins.splice(indexInCoins, 1)
            result.splice(result.length - 1)
            return recCoinCombo(sortedCoins, amount + lastCoin, result, indexInCoins);
        }
        return []
    }
    return []
}


export default coinCombo;
