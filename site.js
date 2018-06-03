function dayOfTheWeek(date){
  const daysOfTheWeek = [ "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date){
  return `Hello, world! Happy ${dayOfTheWeek(date)}.`
}

function reverse(string){
  return string.split('').reverse().join('');
}

function Phrase(content){
  this.content = content;

  this.palindrome = function palindrome(){
    return this.content.toLowerCase() === reverse(this.content.toLowerCase())
  }

  this.louder = function(){
    return this.content.toUpperCase()
  }
}

let p = new Phrase('Racecar')
console.log(p.palindrome())
console.log(p.louder())
