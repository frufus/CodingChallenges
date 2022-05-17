import wordleGuess from './wordle';

describe('Testing wordle', () => {
  const solutionWord = 'fudge';

  it('should output', () => {
    expect(wordleGuess('reads', solutionWord)).toEqual('⬛🟨⬛🟨⬛');
  });

  it('should output', () => {
    expect(wordleGuess('lodge', solutionWord)).toEqual('⬛⬛🟩🟩🟩');
  });

});


