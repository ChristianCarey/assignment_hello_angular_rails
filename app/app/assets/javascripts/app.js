var Hello = angular.module('Hello', ['ui.router', 'restangular'])

Hello.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/messages')

    $stateProvider
      .state('messages', {
          url: '/messages',
          templateUrl: '/templates/messages/index.html',
          controller: 'MessagesCtrl'
        }
      )
  }]
)

Hello.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

Hello.factory('_', ['$window', function($window) {
  return $window._
}])

Hello.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);
