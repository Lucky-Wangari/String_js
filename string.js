let a = "Beautiful";
console.log(a[5]+ a[6]+ a[7]+ a[8]);

//Inserting string at the fourth index
const sentence = "I was feeling hungry today";
const word = "eat";
const sentence2 = (`I was f${word}eeling hungry today`);
console.log(sentence2);

// Counting number of times the string appears in the string variable
const story = "The quick brown fox jumps over the lazy dog"; 
const story1 = (story.match(/the/g)||[]).length;
const story2 = (story.match(/brown/g)||[]).length;
console.log(story1);
console.log(story2);

//Find the words in the string
const string1 = "We are now going to school";
const words = "now";
console.log(`The word "${words}" ${string1.includes(words) ? 'is' : 'is not'} in the string`);
const string2 = "The child was sitting on the table before it fell";
const letters = "sitting";
console.log(`The word "${letters}" ${string2.includes(letters) ? 'is' : 'is not'} in the string`);

//Convert into specified format
//Uppercase
let beauty = "Wonderful";
console.log(beauty.toUpperCase());


//Lowercase
const saying = "amazing";
const list = "BEneath";
console.log(saying.toLowerCase());
console.log(list.toLowerCase());

//Title case
const congrats = "A beautiful wedding";
const wed = congrats.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(wed);




