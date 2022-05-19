import maximizedArray from './maximizedArray';

describe('Testing maximized array', () => {

  const arr1 = [7, 4, 10, 0, 1];
  const arr2 = [9, 7, 2, 3, 6];

  it('testing for same length', () => {
    expect(maximizedArray(arr1, arr2).length).toEqual([9, 7, 6, 4, 10].length);
  });

  it('testing for same sum', () => {
    expect(maximizedArray(arr1, arr2).reduce((p, c) => p+c, 0)).toEqual([9, 7, 6, 4, 10].reduce((p, c) => p+c, 0));
  });

  it('testing for same array', () => {
    expect(maximizedArray(arr1, arr2)).toEqual([9, 7, 6, 4, 10].sort((a,b) => a - b));
  });

});


