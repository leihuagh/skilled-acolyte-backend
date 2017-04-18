const controllers = require('./controllers');

module.exports = [
  { method: 'GET', path: '/api/v1/test', config: controllers.Example.get },
  { method: 'GET', path: '/api/v1/universities', config: controllers.University.getAllUniversities },
  { method: 'POST', path: '/api/v1/universities', config: controllers.University.createUniversity },
  { method: 'GET', path: '/api/v1/universities/{id}', config: controllers.University.getUniversityById },
  { method: 'PUT', path: '/api/v1/universities/{id}', config: controllers.University.updateUniversityById },
  { method: 'DELETE', path: '/api/v1/universities/{id}', config: controllers.University.deleteUniversityById },
];
