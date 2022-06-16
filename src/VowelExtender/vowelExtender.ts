/**
 * Task: Create a loooong teeeext generator that takes in a string and an integer n, and multiplies the vowels in the string by n.
 * @see https://buttondown.email/cassidoo/archive/openness-may-not-completely-disarm-prejudice-but/
 * @param text
 * @param count
 */
const vowelExtender = (text: string, count: number) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const splittedText = text.split('');

    for (let i = 0; i < splittedText.length; i++) {
        if (vowels.includes(splittedText[i].toLowerCase())) {
            splittedText.splice(i, 1, splittedText[i].repeat(count))
        }
    }
    return splittedText.join('');
};

export default vowelExtender;
