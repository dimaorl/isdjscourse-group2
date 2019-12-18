for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
    document.write('fizzbuzz<br />');
  } else if (i % 3 === 0) {
    console.log('fizz');
    document.write('fizz<br />');
  } else if (i % 5 === 0) {
    console.log('buzz');
    document.write('buzz<br />');
  } else {
    console.log(i);
    document.write(i+'<br />');
  }
  console.log( isPalindrom(i) );
  document.write(isPalindrom(i)+'<br />');
}
/**
 * function a isPalindrom.
 * @param {int} input The first number.
 * @return {boolean} answer yes or no
 */
function isPalindrom(input = '') {
  const inputstring = input + '';
  const strLen = inputstring.length;
  let answer = '';
  for (let i = 0; i < strLen; i++) {
    if (inputstring[i] === inputstring[strLen - 1 - i]) answer = 'yes';
    else return false;
  }
  if (answer === 'yes') return true;
}
