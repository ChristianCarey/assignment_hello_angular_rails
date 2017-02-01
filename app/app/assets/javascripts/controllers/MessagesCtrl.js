Hello.controller('MessagesCtrl', ['$scope', 'Restangular', '_',
  function($scope, Restangular, _) {
    $scope.hello = "Hello";
    $scope.messages = Restangular.all('messages').getList().$object;
  }]
)
