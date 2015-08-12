var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('view engine', 'jade');

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  number = req.body.number;
  prime.getPrimes(number);
  res.render('index', {
    number: number,
    primes: prime.primes
  });
});

var port = 3000;
app.listen(port);



// Prime module
var prime = (function() {
  var primes = new Array();

  function isPrime(number) {
    var prime = 1;
    var prime = Boolean(prime);
    if (number < 2) {
      console.log(number+' is not prime');
    } else {
      for(var i=2; i<=Math.sqrt(number);i++) {
        if(number % i == 0) {
          var prime = 0;
          var prime = Boolean(prime);
        }
      }

      if(prime==true) {
        return true;
      } else {
        return false;
      }
    }
  }

  function getPrimes(n) {
    var num = 1;
    while(primes.length <= n) {
      // check if prime
        num = num + 1;
        if (isPrime(num) == true) {
          primes.push(num);
        }
      }
      // push to primes array
      console.log(primes);
    }


  return {
    getPrimes: getPrimes,
    primes: primes
  }
})();
