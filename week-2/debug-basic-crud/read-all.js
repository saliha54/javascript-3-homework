function view_all_handler() {
  // read user input
  // no user input

  // perform core logic
  const cities_entries = [];
  for (let key in cities) {
    cities_entries.push(cities[key]);
  }
  console.log(cities_entries);
  // show results to user
  const display_zone = document.getElementById('display-zone');
  var child = display_zone.lastElementChild;
  while (child) {
    display_zone.removeChild(child);
    child = display_zone.lastElementChild;
  }

  const cities_ul = document.createElement('ul');
  for (let city of cities_entries) {
    const next_li = document.createElement('li');
    next_li.innerHTML = city.id + ': ' + city.name;
    cities_ul.appendChild(next_li);
  }

  display_zone.appendChild(cities_ul);

  console.log('you viewed all cities');
}

const view_all_button = document.getElementById('view-all-cities');
view_all_button.addEventListener('click', view_all_handler);
