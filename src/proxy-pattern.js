//proxy design pattern
function cryptoCurrency() {
  console.log("api getting value");
  this.getValue = coin => {
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

console.log(cryptoApi.getValue("Bitcoin"));
