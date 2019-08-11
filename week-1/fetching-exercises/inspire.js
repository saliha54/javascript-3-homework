// docs: https://theysaidso.com/api/
const xhr = new XMLHttpRequest();

function get_random() {
  /*
    send a get request to this url:
      http://quotes.rest/qod/random.json https://quotes.rest/quote/random
    print the quote to the console
  */
  xhr.open('GET', 'https://quotes.rest/quote/random');
  xhr.send();
  var my_string = xhr.response;
  var my_obj = JSON.parse(my_string).quote; /// not working
  console.log(my_obj);
}
document.getElementById('get-categories').addEventListener('click', get_categories);

function get_categories() {
  /*
    send a get request to this url:
      http://quotes.rest/qod/categories.json
    print the categories to the console using console.table
      https://developer.mozilla.org/en-US/docs/Web/API/Console/table
  */
  xhr.open('GET', 'https://quotes.rest/qod/categories.json');
  xhr.send();

  var my_string = xhr.response;
  var my_obj = JSON.parse(my_string).contents.categories;
  console.table(my_obj);
}
document.getElementById('get-categories').addEventListener('click', get_categories);

function get_from_category() {
  // read the category from user input
  // build your url
  /*
    get a random quote from the chosen category
    print the quote to the console
  */

  var input_category = document.getElementById('category').value;
  xhr.open('GET', 'https://quotes.rest/qod/categories.json');
  xhr.send();

  var my_string = xhr.response;
  var my_obj = JSON.parse(my_string).contents.categories;
  console.table(my_obj.input_category);
}
document.getElementById('get-from-category').addEventListener('click', get_from_category);

function get_by_length() {
  // read the min & max lengths from user input
  // build your url
  /*
    get a random quote in the given range
    print the quote to the console
  */

  var min = document.getElementById('min').value;
  var max = document.getElementById('max').value;

  xhr.open('GET', 'https://quotes.rest/qod/categories.json');
  xhr.send();

  var my_string = xhr.response;
  var my_obj = JSON.parse(my_string).contents.categories;

  for (let i in my_obj) {
    if (my_obj[i].length < max && my_obj[i].length > min) {
      console.log(my_obj[i]);
    }
  }
}
document.getElementById('get-by-length').addEventListener('click', get_by_length);

function length_and_category() {
  // read user input
  // build your url
  /*
    get a random quote matching the user input
    print the quote to the console
  */

  var input_category = document.getElementById('category').value;
  var min = document.getElementById('min').value;
  var max = document.getElementById('max').value;
  xhr.open('GET', 'https://quotes.rest/qod/categories.json');
  xhr.send();

  var my_string = xhr.response;
  var my_obj = JSON.parse(my_string).contents.categories;
  var cat_obj = my_obj.input_category;

  for (let i in cat_obj) {
    if (cat_obj[i].length < max && cat_obj[i].length > min) {
      console.log(cat_obj[i]);
    }
  }
}
document.getElementById('length-and-category').addEventListener('click', length_and_category);
