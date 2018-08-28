/*
  Name: Disemvoweler
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/1ystvb/022414_challenge_149_easy_disemvoweler/


  
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
let inputArray;
let pushedVowels = [];
let indexes = [];
let stringNotVowels = '';
let stringVowels = '';

function disemvowel(input) {
  inputArray = input.split('');
  console.log(`Input string before removal of vowels: ${inputArray.join('')}`);
  for (let i = 0; i < inputArray.length; i++) {
    for (let y = 0; y < VOWELS.length; y++) {
      if (inputArray[i].includes(VOWELS[y])) {
        pushedVowels.push(inputArray[i]);
        indexes.push(i);
      }
    }
  }
  console.log(`Vowels extracted: ${pushedVowels}`);
  console.log(`Indexes of vowels: ${indexes}`);
  
  for (let i = 0; i < indexes.length; i++) {
    console.log(`Indexed vowel: ${inputArray[indexes[i]]}`);
  }

  while(indexes.length) {
    inputArray.splice(indexes.pop(), 1);
  }
  stringNotVowels = inputArray.join('');
  stringVowels = pushedVowels.join('');
  console.log('------- RESULT -------');
  console.log(`Input without vowels: ${stringNotVowels}`);
  console.log(`Extracted vowels: ${stringVowels}`);
 
  
}

disemvowel('gregorexa');