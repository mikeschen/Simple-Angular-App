angular
    .module('app', [
        'ui.router'
])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      resolve: {
        todos: ['$http', function($http) {
          return $http.get('/api/todos.json').then(function(response) {
            return response.data;
          })
        }]
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })
}])
