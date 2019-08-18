console.log('NEW');

let xhr;
let dropdown = document.createElement('select');
dropdown.id = 'dropdown_menu';
let mainDiv = document.getElementById('main');
mainDiv.append(dropdown);
headers_divs_etc();

const dropdown_list = function(item, menu) {
  let opt = document.createElement('option');
  opt.id = item;
  opt.innerHTML = item;
  menu.appendChild(opt);
};

document.getElementById('loading').style.display = 'block';
fetch('https://restcountries.eu/rest/v2/all/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let myMenu = document.getElementById('dropdown_menu');
    let result = myJson.map(a => {
      dropdown_list(a.name, myMenu);
      return a.name;
    });
    document.getElementById('loading').style.display = 'none';
  });

dropdown.onchange = function() {
  document.getElementById('loading').style.display = 'block';
  let index = dropdown.selectedIndex;
  fetch('https://restcountries.eu/rest/v2/all/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let my_name = myJson[index].name;
      let my_capital = myJson[index].capital;
      let my_borders_code = myJson[index].borders;
      document.getElementById('name').innerHTML = my_name;
      document.getElementById('capital').innerHTML = my_capital;
      let border_ul = document.getElementById('border');
      border_ul.innerHTML = '';

      for (let border of my_borders_code) {
        let border_list = myJson.filter(obj => obj.alpha3Code == border);
        let border_li = document.createElement('li');
        border_li.innerHTML = border_list[0].name;
        border_ul.append(border_li);
      }

      document.getElementById('loading').style.display = 'none';
    });
};

function headers_divs_etc() {
  let name_div = document.createElement('div');
  let name_header = document.createElement('h1');
  let name_info = document.createElement('h2');

  let capital_div = document.createElement('div');
  let capital_header = document.createElement('h1');
  let capital_info = document.createElement('h2');

  let border_div = document.createElement('div');
  let border_header = document.createElement('h1');
  let border_info = document.createElement('ul');

  name_info.id = 'name';
  capital_info.id = 'capital';
  border_info.id = 'border';

  name_header.innerHTML = 'NAME';
  capital_header.innerHTML = 'CAPITAL';
  border_header.innerHTML = 'BORDERS';

  name_div.append(name_header, name_info);
  capital_div.append(capital_header, capital_info);
  border_div.append(border_header, border_info);
  mainDiv.append(name_div, capital_div, border_div);
}
