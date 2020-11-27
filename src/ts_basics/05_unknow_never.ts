let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Primo';
if (typeof userInput === 'string') {
  userName = userInput;
}

// never for function that never return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('an error occurred!', 500);
