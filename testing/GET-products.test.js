const pactum = require('pactum');


it('should return status code 200', async () => {
  await pactum.spec()
    .withMethod('GET')
    .withPath('http://localhost:3000/products/')
    .expectStatus(200);
});


//https://pactumjs.github.io/#/response-validation?id=expectjsonlike
it('should return all products info', async () => {
  await pactum.spec()
    .get('http://localhost:3000/products/')
    .expectJsonLike([
      {
        id: 'typeof $V === "number"',
        name: 'typeof $V === "string"',
        slogan: 'typeof $V === "string"',
        description: 'typeof $V === "string"',
        category: 'typeof $V === "string"',
        default_price: 'typeof $V === "number"',
      }
    ])
    .expectStatus(200);
});
