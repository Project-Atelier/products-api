const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/products'
  },
  response: {
    status: 200,
    body: [
      {
        id: 'project-id',
        name: 'project-name'
      }
    ]
  }
});

mock.start(3000);