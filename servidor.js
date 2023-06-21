// Construindo o módulo servidor

const {response} = require ('express');

var HTTP = require('http');
var URL = require('url');

HTTP.createServer(

    function(req, res) {
        var querystring = URL.parse(req.url, true).query;

        var Nome = querystring['nome'];
        var Email = querystring['email'];
        var Maca = querystring['maca'];
        var Banana = querystring['banana'];
        var Laranja = querystring['laranja'];
        var Mamao = querystring['mamao'];
        var Melancia = querystring['melancia'];
        var Orcamento = querystring['orcamento'];
        
        var mySQL = require('mysql2');

        var con = mySQL.createConnection ({
            host: "localhost",
            user: "root",
            password: "123456",
            database: "mercado"
        });

        con.connect(
            function(err) {
                 if (err) throw err;
                console.log("Conexão realizada!!!");
                var SQL = "INSERT INTO Compra VALUES ("+ 0 +", '" + Nome + "', '" + Email + "',"+ Maca +"," + Banana + "," + Laranja + ","+ Mamao +"," + Melancia + ","+ Orcamento +")";
                con.query(SQL, function(err, result){
                    if (err) throw err;
                    console.log("Orçamento realizado com sucesso!!!");
                });          
            }
        );

    }
    

).listen(8080);
