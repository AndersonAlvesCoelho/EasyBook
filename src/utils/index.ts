function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limitText(text: string, characterLimit: number): string {
  if (text.length > characterLimit) {
    return text.substring(0, characterLimit) + '...';
  }
  return text;
}

export { generateRandomNumber, limitText };
