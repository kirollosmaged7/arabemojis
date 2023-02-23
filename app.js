const express = require('express');
const multer = require('multer')
const fs = require('fs')
const app = express();
const https = require('https');
const path = require('path');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(express.static(path.join(__dirname, 'public')));

const server = https.createServer(options, app);

server.listen(3000, () => {
  console.log('Server running on 3000');
});


/*
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`running express server on ${PORT}`)
})
app.use(express.static('public'))
*/
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
      cb(null, "./records"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });
  
app.get('/', (req, res) => {
    ;
    res.sendFile('./views/index.html', { root: __dirname });
    //res.send('<p> hello </p>')
  });
  const upload = multer({ storage: fileStorageEngine });
  

  app .post('/upload', upload.array("records"), (req , res)=> {
    
    console.log(req.file)
    
    
    }) ;
   