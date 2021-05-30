function pader(cartNumber,digitForPad,sign) {

     const last4Digits = cartNumber.slice(digitForPad);
     const maskedNumber = last4Digits.padEnd(cartNumber.length, sign);
     return maskedNumber

}

console.log(pader('5859831138991137', 4 , 'x'));