  var http = require('http'); //node modules => http, fs,os, path, url

  var server = http.createServer(function (req, res) {

    if(req.url == "/"){
        res.write("Anasayfa");
    }else if(req.url == "/urunler"){
        res.write("<h1>Urunler Sayfasi</h1>");
    }else{
        res.write("<h1>404 Not Found</h1>");
    }
    res.end();
  });

  server.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000');
  });