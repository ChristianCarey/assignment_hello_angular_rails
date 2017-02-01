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
