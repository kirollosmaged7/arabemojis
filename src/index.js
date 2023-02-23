const express = require('express');

const app = express();
const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`running express server on ${PORT}`)
})
app.get('/', (req, res) => {
    ;
    res.sendFile('C:\Users\kirol\OneDrive\Desktop\site\node\views\index.html', { root: __dirname });
  });
