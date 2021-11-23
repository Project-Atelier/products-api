const pactum = require('pactum');


it('should return status code 200', async () => {
  await pactum.spec()
    .withMethod('GET')
    .withPath('http://localhost:3000/products/1')
    .expectStatus(200);
});


it('should return a product info', async () => {
  await pactum.spec()
    .get('http://localhost:3000/products/1')
    .expectJsonLike(
      {
        id: 'typeof $V === "number"',
        name: 'typeof $V === "string"',
        slogan: 'typeof $V === "string"',
        description: 'typeof $V === "string"',
        category: 'typeof $V === "string"',
        default_price: 'typeof $V === "number"',
        features: 'Array.isArray($V)',
      }
    )
    .expectStatus(200);
});

