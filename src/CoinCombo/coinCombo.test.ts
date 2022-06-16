import coinCombo from "./coinCombo";

describe('Testing Coin Combo', () => {

  it('should output', () => {
    expect(coinCombo([2,3,5,7], 17).sort()).toEqual([3,7,7].sort());
  });

  it('should output', () => {
    expect(coinCombo([2,3,5], 11).sort()).toEqual([3,3,5].sort());
  });

});


