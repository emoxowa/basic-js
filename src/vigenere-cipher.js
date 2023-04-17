const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        const messageIndex = this.alphabet.indexOf(message[i]);
        const keyChar = key[keyIndex % key.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const encryptedChar =
          this.alphabet[(messageIndex + keyCharIndex) % this.alphabet.length];
        encryptedMessage += encryptedChar;
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        const encryptedCharIndex = this.alphabet.indexOf(encryptedMessage[i]);
        const keyChar = key[keyIndex % key.length];
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const messageChar =
          this.alphabet[
            (encryptedCharIndex - keyCharIndex + this.alphabet.length) %
              this.alphabet.length
          ];
        message += messageChar;
        keyIndex++;
      } else {
        message += encryptedMessage[i];
      }
    }

    return this.isDirect ? message : message.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
