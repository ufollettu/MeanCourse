angular.module('articles').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/articles', { //Index
            templateUrl: 'articles/views/list-articles.client.view.html'
        }).
        when('/articles/create', { //new
            templateUrl: 'articles/views/create-article.client.view.html'
        }).
        when('/articles/:articleId', { //show
            templateUrl: 'articles/views/view-article.client.view.html'
        }).
        when('/articles/:articleId/edit', { //edit
            templateUrl: 'articles/views/edit-article.client.view.html'
        });
    }
]);