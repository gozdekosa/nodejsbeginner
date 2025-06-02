  var http = require('http'); //node modules => http, fs,os, path, url
  var fs = require('fs'); // file system

  var server = http.createServer(function (req, res) {

    if(req.url == "/"){

        fs.readFile("index.html", (err, html)=>{
            res.write(html);
            res.end();
        });
       
    }else if(req.url == "/urunler"){

        fs.readFile("urunler.html", (err, html)=>{
            res.write(html);
            res.end();
        });

    }else{

        fs.readFile("404.html", (err, html)=>{
            res.write(html);
            res.end();
        });
        
    }

    
  });

  server.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000');
  });


// npm init -yes ile packet.json dosyası oluşturulur.
// npm install express ile express modülü yüklenir.  
// npm install nodemon ile nodemon yüklenir. her değişiklikte server'ı yeniden başlatmaya gerek kalmaz.
// nodemon, package.json dosyasına eklenir. Böylece nodemon ile çalıştırılır. nodemon index.js komutu ile server çalıştırılır.
// nodemon index.js ile server çalıştırılır.
//npm install ile package.json dosyasındaki modüller yüklenir. Yani node_modules klasörü oluşturulur.
// template engine olarak ejs, handlebars, pug gibi modüller kullanılabilir.
//ejs npm install ejs ile yüklenir.
// express ile middleware kullanımı, routing, static file serving gibi işlemler yapılabilir.


// gönderilen verinin obje olması lazım 49:38 https://www.youtube.com/watch?v=0hZNdTogNo0&list=LL&index=2&t=5893s

//public klasörü oluşturulur. Bu klasör içinde css, js, img gibi klasörler oluşturulur. Bu klasör içinde static dosyalar tutulur.
// express.static ile public klasörü static olarak tanımlanır. Böylece public klasöründeki dosyalara erişilebilir.
// app.use(express.static('public')); // public klasörünü static olarak tanımlama
// app.use(express.static(__dirname + '/public')); // public klasörünü static olarak tanımlama