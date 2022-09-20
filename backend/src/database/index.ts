import { createConnection } from 'typeorm';

createConnection()
  .then(connection => {
    url: 'postgres://eatlylvc:7VtOcj8LsFKAWwfqJwnSTIuEaZeGJGvW@tyke.db.elephantsql.com/eatlylvc 
    '
  })
  .catch(error => console.log(error));
