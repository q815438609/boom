var products;


var request = new XMLHttpRequest();
request.open('GET', 'data/products.json');
request.responseType = 'json';

request.onload = function () {
  if (request.status === 200) {
    products= request.response;
    

    initialize();
  } else {
    console.log('Network request for products.json failed with response ' + request.status + ': ' + request.statusText)
  }
};

request.send();

function initialize()
{
console.log(products);
}


