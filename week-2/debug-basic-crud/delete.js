function delete_city_handler() {
  // read user input
  const user_input_field = document.getElementById('city-to-delete');
  const id_string = user_input_field.value;
  const id_to_delete = Number(id_string);

  // perform core logic
  const deleted_entry = cities[id_to_delete];

  // show results to user
  const display_zone = document.getElementById('display-zone');
  var child = display_zone.lastElementChild;
  while (child) {
    display_zone.removeChild(child);
    child = display_zone.lastElementChild;
  }

  const message_p = document.createElement('p');
  message_p.innerHTML = 'you just deleted ' + deleted_entry.name;

  display_zone.appendChild(message_p);

  console.log('you just deleted ' + deleted_entry.name);

  delete cities[id_to_delete];
}

const delete_city_button = document.getElementById('delete-city');
delete_city_button.addEventListener('click', delete_city_handler);
