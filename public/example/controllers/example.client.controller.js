angular.module('example')
       .controller('ExampleController', ['$scope', 'Authentication',
           function ($scope, Authentication) {
           $scope.authentication = Authentication;
           // $scope.name = Authentication.user ? Authentication.user.fullName: 'MEAN App'; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
       }]);