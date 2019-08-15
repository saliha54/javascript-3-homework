console.log('AAHFJFKSOGJSAKFJSFKJRFO');

/*const get = function(url, success, error) {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText);
      } else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

function func1(a) {
  users = JSON.parse(a);
  console.log('user', users);
}

function func2(error) {
  console.log(error);
}

let my_user = function() {
  get('https://jsonplaceholder.typicode.com/users', func1, func2);
};

my_user();
*/
let xhr;
const get = function(url) {
  xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
    console.log('first', xhr.readyState);
    if (xhr.readyState === 4) {
      console.log('first if', xhr.readyState);
      if (xhr.status === 200) {
        console.log('second if', xhr.readyState);
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr);
      }
      console.log('leave second if', xhr.readyState);
    }
    console.log('leave first if', xhr.readyState);
  };
  console.log('last', xhr.readyState);
  xhr.send();
};

get('https://jsonplaceholder.typicode.com/users');
