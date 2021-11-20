const pactum = require('pactum');


it('should return status code 200', async () => {
  await pactum.spec()
    .withMethod('GET')
    .withPath('http://localhost:3000/products/6/styles')
    .expectStatus(200);
});


it('should return all styles info', async () => {
  await pactum.spec()
    .get('http://localhost:3000/products/1/styles')
    .expectJsonLike(
      {
        product_id: 'typeof $V === "number"',
        results: [{
                style_id: 'typeof $V === "number"',
                name: 'typeof $V === "string"',
                original_price: 'typeof $V === "number"',
                sale_price: 'typeof $V === "number"|| typeof $V === "null" ',
                'default?': 'typeof $V === "boolean"',
                photos: 'Array.isArray($V)',
                skus: 'typeof $V === "object"'
          }]
      }
    )
    .expectStatus(200);
});





