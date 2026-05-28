const express = require('express');

const app = express();

const PORT = 3000; 

app.get('/',(req, res) => {

    res.send('<h1>Proyecto DevOps AWS Docker Swarm Jenkins</h1>');

 });

app.listen(PORT, () => {

   console.log(`Servidor ejecutandose en puerto ${PORT}`);
});



