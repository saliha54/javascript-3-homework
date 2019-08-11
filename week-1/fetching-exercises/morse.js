// https://funtranslations.com/api/morse

// do what you did in "yodize.js", but for morse code

// https://funtranslations.com/api/morse https://quotes.rest/quote/random

// do what you did in "yodize.js", but for morse code

// docs: https://funtranslations.com/api/yoda

function morse() {
  const phrase = document.getElementById('to-morse').value;

  const encoded = encodeURIComponent(phrase);

  const url = 'https://funtranslations.com/api/morse.json?text=' + encoded;

  /*
    use fetch to send a get request to the url above
    then log only the translated phrase
  */
  fetch(url).then(function(response) {
    console.log(response.json());
    console.log(response.json()); //.content.translated
  });
}

document.getElementById('morse').addEventListener('click', yodize);
