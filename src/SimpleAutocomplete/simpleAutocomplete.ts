/**
 * Task: Implement a simple version of autocomplete, where given an input string s and a dictionary of words dict, return the word(s) in dict that partially match s (or an empty string if nothing matches).
 * @see https://buttondown.email/cassidoo/archive/around-every-corner-always-protect-the-engine/
 * @param input
 * @param dict
 */
const simpleAutocomplete = (input : string, dict : string[]) => {
 return dict.filter(word => word.includes(input))
};

export default simpleAutocomplete;
