function create() {
  const new_title = document.createElement('h1');
  new_title.innerHTML = 'Novo Título';
  document.getElementById('titles').appendChild(new_title);
}

function erase() {
  let titles = document.getElementById('titles');
  titles.removeChild(titles.lastChild);
}