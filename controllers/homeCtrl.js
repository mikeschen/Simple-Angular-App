angular
  .module('app')
  .controller('homeCtrl', ['$scope', '$http', 'todos', function($scope, $http, todos) {
    $scope.title = "home";
    $scope.todos = todos;

    $scope.save = function() {
      alert(JSON.stringify($scope.todos));
    };
  }]);
