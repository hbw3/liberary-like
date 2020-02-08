//proxy design pattern
function cryptoCurrency() {
  this.getValue = coin => {
    console.log(`getting ${coin} value`);
    switch (coin) {
      case "Bitcoin":
        return "$800";
      case "Litecoin":
        return "$500";
      case "Ethereum":
        return "$300";
      default:
        return null;
    }
  };
}

const cryptoApi = new cryptoCurrency();

/* console.log(cryptoApi.getValue("Bitcoin"));
console.log(cryptoApi.getValue("Litecoin"));
console.log(cryptoApi.getValue("Ethereum")); */

function proxyCryptoCurrency() {
  this.cache = {};
  this.getValue = coin => {
    if (this.cache[coin] == null) {
      this.cache[coin] = cryptoApi.getValue(coin);
    }

    return this.cache[coin];
  };
}

const proxy = new proxyCryptoCurrency();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
