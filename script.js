// GLOBAL VARIABLES
const formElement = document.getElementById('words-counter-form');
const showListButton = document.getElementById('show-list-button');


// FUNCTIONS
const countWords = str => { // Takes user's input as an argument.
  let splitedText = str.split(' '); // Creates array of strings from user input, using space ' ' as a spliting point.
  let checkedSplitedText = []; // Creates epmty array.
  
  splitedText.forEach(element => {
    if (/\w+/.test(element)) { // If item in array created from user input is a word...
      checkedSplitedText.push(element); // push that item into new empty array.
    }
  });
  
  let orderedListElement = document.getElementById('list-of-words');

  checkedSplitedText.forEach(element => { // For each item in the output array 'checkedSplitedText'... 
    let newListItem = document.createElement('li'); // create new 'li' element...
    newListItem.textContent = element; // add the item (word) into list item ('li').
    orderedListElement.append(newListItem); // Append all 'li' elements into ordered list.
  });
  
  return checkedSplitedText.length; // Return the number of the words from user's input.
};


// EVENT LISTENERS
formElement.addEventListener('submit', event => {
  event.preventDefault(); // Prevent form from submitting (it will not reload the page, and send any data).
  let textareaElement = document.getElementById('user-text');
  let outputElement = document.getElementById('counter-output');
  let textareaText = textareaElement.value; // Collect current text from 'textarea'.
  let numberOfWords = countWords(textareaText); // Call the function and keep the number of words into variable.

  // Check the number of words if 1 print the singular from 'word' else print plural.
  outputElement.textContent = `${numberOfWords} ${numberOfWords === 1 ? 'word' : 'words'}`;
});

showListButton.addEventListener('click', (event) => { // When click on the 'button'...
  let targetList = document.getElementById('list-of-words'); // get order list element...
  targetList.classList.toggle('hide-list'); // toggle between show and hide styles.
  targetList.classList.toggle('show-list');

  if (targetList.classList.contains('show-list')) { // If the ordered list is visible...
    event.target.textContent = 'hide the words'.toLocaleUpperCase(); // set 'button' text value to 'hide the words'...
  } else {
    event.target.textContent = 'show the words'.toLocaleUpperCase(); // else set 'button' text value to 'show the words'.
  }
});