// at(index)
const at1 = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`and index of ${index} return the character ${at1.at(index)}`);

//------------------------------------------------------------------------

//includes(searchString, position)
const includes1 = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log("includes :: " + includes1.includes(word))

//------------------------------------------------------------------------

// str.match(regexp) 
const match1 = "for more information";
const findStr = /for/;
const result = match1.match(findStr);
console.log(result);

//------------------------------------------------------------------------

//concaat()
const concat1 = "hello";
const concat2 = "world";

const concatPlus = concat1.concat(" ", concat2);
console.log("concat :: " + concatPlus);

//------------------------------------------------------------------------

//replace(pattern, replacement)
const replace1 = "hello kkk"
console.log( "replace :: " + replace1.replace("kkk", "replace"));

//replaceAll(pattern, replacement)
const replaceAll1 = "hi dog, I love dog";
console.log("replaceAll :: " + replaceAll1.replaceAll("dog", "monkey"));

//------------------------------------------------------------------------

// slice(indexStart, indexEnd)
const slice1 = "The quick brown fox jumps over the lazy dog."
console.log("slice :: " + slice1.slice(20));
console.log("slice :: " + slice1.slice(-4));

//------------------------------------------------------------------------

// split() 
const split1 = "The quick brown fox jumps over the lazy dog."
const words = split1.split(" ");
const chars = split1.split("");
console.log("split :: " + words);
console.log("split :: " + chars[8]);

//------------------------------------------------------------------------

// subString(indexStart[, indexEnd])
const subString1 = "eunhyeon";
console.log("subString :: " + subString1.substring(1, 3));

//------------------------------------------------------------------------

//toLowerCase()
const toLowerCase1 = "THE QUICK BROWN fox jumps over the lazy dog.";
console.log("toLowerCase :: " + toLowerCase1.toLowerCase());

//toUpperCase()
const toUpperCase1 = "the quick brown fox jumps over the lazy dog";
console.log("toUpperCase :: " + toUpperCase1.toUpperCase());

//------------------------------------------------------------------------

//trim()
const trim1 = "     hello world               ";
console.log("trim :: " + trim1.trim());

//------------------------------------------------------------------------

