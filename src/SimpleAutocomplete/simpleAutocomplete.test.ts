import simpleAutocomplete from './simpleAutocomplete';

describe('Testing simple autocomplete', () => {
  const dict = ['apple', 'banana', 'cranberry', 'strawberry'];

  it('should find "apple"', () => {
    expect(simpleAutocomplete('app', dict)).toEqual(['apple']);
  });

  it('should find nothing', () => {
    expect(simpleAutocomplete('fart', dict)).toEqual([]);
  });

  it('should find "cranberry" and "strawberry"', () => {
    expect(simpleAutocomplete('berry', dict)).toEqual(['cranberry', 'strawberry']);
  });
});


