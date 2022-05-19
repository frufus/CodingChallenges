import mergeIntervals from './mergeIntervals';

describe('Testing maximized array', () => {

  const exmpl1 = [[1, 4], [2, 6], [8, 10], [15, 20]];
  const exmpl2 = [[1, 2], [2, 7]];

  it('testing example 1', () => {
    expect(mergeIntervals(exmpl1)).toEqual([[1, 6], [8, 10], [15, 20]]);
  });

  it('testing example 2', () => {
    expect(mergeIntervals(exmpl2)).toEqual([[1,7]]);
  });

});


