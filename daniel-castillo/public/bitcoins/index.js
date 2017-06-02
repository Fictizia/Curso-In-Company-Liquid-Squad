getContents = function() {

  var bitSocket = new WebSocket('wss://ws.blockchain.info/inv'),
    bitcoins = 0,
    currencyUrl = 'https://blockchain.info/es/ticker?cors=true',
    currencyString = '',
    lastCurrencyString = '',
    currencyContainer = document.getElementById('currency'),
    lastCurrencyContainer = document.getElementById('lastCurrency');


  bitSocket.onopen = function() {

    bitSocket.send('{"op":"unconfirmed_sub"}');
    bitSocket.send('{"op":"blocks_sub"}');

    bitSocket.onmessage = function(msg) {

      var data = JSON.parse(msg.data);

      if (data.op === 'utx') {

        var satoshis = 0; // 1 bitcoin = 100,000,000 satoshi
        var segments = data.x.out;

        segments.forEach(function(key) {
          satoshis += key.value;
        })

        bitcoins += (satoshis / 100000000);
        bitcoins = Math.round(bitcoins * 1000000) / 1000000;
        document.getElementById('bitcoins').textContent = bitcoins;

        getCurrency();
      }

    }
  }


  function getCurrency() {

    var req = new XMLHttpRequest();
    req.open('GET', currencyUrl, false);
    req.send(null);

    if (req.status == 200) {

      var response = JSON.parse(req.responseText);

      var currencyArray = Object.keys(response).map(function(key) {
        return key + ' ' + '(S): ' + response[key].sell + response[key].symbol + ' | ' + '(B): ' + response[key].buy + response[key].symbol + ' | ';
      })

      var lastCurrencyArray = Object.keys(response).map(function(key) {
        return key + ': ' + response[key].last + response[key].symbol + ' | ';
      })

      var currencyString = currencyArray.join(''),
        lastCurrencyString = lastCurrencyArray.join(''),
        date = Date() + ' | ';

      currencyContainer.textContent = date + currencyString;
      lastCurrencyContainer.textContent = date + lastCurrencyString;

    }

  }

}
