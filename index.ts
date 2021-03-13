const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 65)).join('')


export const cipher = (text: string, shift: number): string => {

  // shift < 0 accounts for negative shifts
  if (shift < 0 || shift > 26) {
    shift = shift % 26
  };

  const encoded = text.split('').map((ltr, i) => {
    const letterIndex = alphabet.indexOf(ltr.toUpperCase());
    // check for letter character
    if (letterIndex !== -1) {
      // in range
      if (alphabet[letterIndex + shift]) {
        return alphabet[letterIndex + shift]
      } else {
        // out of range and shift is positive ("moving right")
        if (shift > 0) {
          return alphabet[letterIndex + shift - 26]
        } 
        // out of range and shift if negative ("moving left")
        else {
          return alphabet[letterIndex + shift + 26]
        }
      }
    }
    // spaces/periods/etc.
    return ltr
  });

  return encoded.join('')
}