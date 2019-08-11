function sort_charecters(str) {
  return str
    .split('')
    .sort(function(a, b) {
      return a - b;
    })
    .join('');
}

function sort_handler() {
  // read and process user input
  var to_sort = document.getElementById('to-sort').value;

  // pass user input through core logic

  /* write a logic function to sort charecters in a string */
  /* assign the result to a variable named 'sorted' */
  var sorted = sort_charecters(to_sort);

  // report result to user
  var output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
}

var sort_button = document.getElementById('sort-it');
sort_button.addEventListener('click', sort_handler);
