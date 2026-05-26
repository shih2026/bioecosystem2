// shim using native global DOMException available in Node.js 18+
module.exports = globalThis.DOMException || class DOMException extends Error {
  constructor(message = "The operation was aborted.", name = "AbortError") {
    super(message);
    this.name = name;
  }
};
