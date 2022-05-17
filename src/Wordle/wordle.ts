/**
 * Task: Using the rules of Wordle, given a guessWord and a solutionWord, return a set of emojis returned from the guessWord.
 * @see https://buttondown.email/cassidoo/archive/the-time-is-always-right-to-do-what-is-right-dr/
 * @param guess
 * @param solution
 */
const wordleGuess = (guess: string, solution: string) => {
  const guessArray = guess.split('');
  const solutionArray = solution.split('');
  const result: string[] = [];

  guessArray.forEach((g, index) => {
    if (g === solutionArray[index]) {
      result.push('🟩');
    } else if (solutionArray.includes(g)) {
      result.push('🟨');
    } else {
      result.push('⬛');
    }
  });

  return result.join('');
};

export default wordleGuess;
