// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive methods

// Append a cat to the end of the array
function destructivelyAppendCat(name) {
  console.log('Before append:', cats);
  cats.push(name);
  console.log('After append:', cats);
}

// Prepend a cat to the start of the array
function destructivelyPrependCat(name) {
  console.log('Before prepend:', cats);
  cats.unshift(name);
  console.log('After prepend:', cats);
}

// Remove the last cat from the array
function destructivelyRemoveLastCat() {
  console.log('Before remove last:', cats);
  cats.pop();
  console.log('After remove last:', cats);
}

// Remove the first cat from the array
function destructivelyRemoveFirstCat() {
  console.log('Before remove first:', cats);
  cats.shift();
  console.log('After remove first:', cats);
}

// Non-destructive methods

// Append a cat to the end of the array and return a new array
function appendCat(name) {
  console.log('Original array before append:', cats);
  const newCats = [...cats, name];
  console.log('New array after append:', newCats);
  return newCats;
}

// Prepend a cat to the start of the array and return a new array
function prependCat(name) {
  console.log('Original array before prepend:', cats);
  const newCats = [name, ...cats];
  console.log('New array after prepend:', newCats);
  return newCats;
}

// Remove the last cat and return a new array
function removeLastCat() {
  console.log('Original array before remove last:', cats);
  const newCats = cats.slice(0, cats.length - 1);
  console.log('New array after remove last:', newCats);
  return newCats;
}

// Remove the first cat and return a new array
function removeFirstCat() {
  console.log('Original array before remove first:', cats);
  const newCats = cats.slice(1);
  console.log('New array after remove first:', newCats);
  return newCats;
}
