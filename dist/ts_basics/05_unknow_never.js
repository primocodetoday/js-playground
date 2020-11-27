"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Primo';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never for function that never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error occurred!', 500);
