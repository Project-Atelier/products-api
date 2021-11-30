const pactum = require('pactum');


it('should return status code 200', async () => {
  await pactum.spec()
    .withMethod('GET')
    .withPath('http://localhost:3000/products/1/related')
    .expectStatus(200);
});


it('should return related id', async () => {
  await pactum.spec()
    .get('http://localhost:3000/products/1/related')
    .expectJsonLike(
      [
        2,
        3,
        8,
        7
      ]
    )
    .expectStatus(200);
});

