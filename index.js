const { promises } = require('fs');

Promise.all([
  promises.readFile('./archivos/saludo.txt', 'utf8'),
  promises.readFile('./archivos/nombre.txt', 'utf8'),
  promises.readFile('./archivos/ciudad.txt', 'utf8')
])
  .then(([saludo, nombre, ciudad]) => {
    console.log(`${saludo} ${nombre}, ¿cómo va todo por ${ciudad}?`);
  })
  .catch(error => {
    console.error(error);
  });
