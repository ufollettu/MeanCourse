var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName,
    ['ngRoute', 'users', 'example']);

mainApplicationModule.config(['$locationProvider',
    function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!'; //to solve Facebook OAuth bug

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName]);
});