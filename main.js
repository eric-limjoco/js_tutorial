let Phrase = require("eric-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);

  let palindromeResult = document.querySelector("#palindromeResult");
  let res = "";

  if(phrase.palindrome()){
    res = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    res = `"<strong>${phrase.content}</strong>" is not a palindrome`;
  }
  palindromeResult.innerHTML = res;
}


document.addEventListener("DOMContentLoaded", function(){
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener('submit', function(){
    palindromeTester(event);
  });
});
