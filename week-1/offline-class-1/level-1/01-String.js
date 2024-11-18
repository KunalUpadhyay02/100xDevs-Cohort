// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 2, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World World", "World", "JavaScript");




// The String.prototype.replace method in JavaScript replaces only the first occurrence of the target substring when you pass a string as the target. In your code, only the first "World" is replaced with "JavaScript."

// To replace all occurrences, you need to use a regular expression with the global flag (g). Here's the updated function:


function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(new RegExp(target, "g"), replacement));
}
replaceString("Hello World World", "World", "JavaScript");
// Explanation:
// new RegExp(target, "g"): Creates a regular expression to match all occurrences of the target string.
// "g": The global flag ensures all matches are replaced, not just the first one.


// If target is always a string, you could use str.replaceAll(target, replacement) in modern JavaScript (ES2021+). For example:

function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replaceAll(target, replacement));
}
replaceString("Hello World World", "World", "JavaScript");



// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
