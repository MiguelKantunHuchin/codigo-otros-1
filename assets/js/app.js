const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //Se cambia el selector de ID por un selector de clase
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //console.log(data); esta linea por ahora no es necesario al no estar inicializada la variable


  //Creamos una variable para almacenar el response en un JSON

  let data = await response.json();


  //Se cambiaron las plantillas literales a simplemente acceder a la info del objeto data, la plantilla innecesaria ya que no se concatenan datos
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);