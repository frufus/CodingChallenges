import vowelExtender from "./vowelExtender";

describe('Testing vowel extender', () => {

  it('should output', () => {
    expect(vowelExtender('hello world', 3)).toEqual('heeellooo wooorld');
  });

  it('should output', () => {
    expect(vowelExtender('lol', 10)).toEqual('looooooooool');
  });

});


