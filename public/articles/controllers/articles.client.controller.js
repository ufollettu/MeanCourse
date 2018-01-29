angular.module('articles').controller('ArticlesController', ['$scope',
    '$routeParams', '$location', 'Authentication', 'Articles',
    function($scope, $routeParams, $location, Authentication, Articles) {
        $scope.authentication = Authentication;
        //CRUD create
        $scope.create = function () {
            var article = new Articles({
                title: this.title,
                content: this.content
            });
            article.$save(function (response) {
                $location.path('articles/' + response._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        //CRUD read
        $scope.find = function () {
            $scope.articles = Articles.query();
        };
        $scope.findOne = function () {
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
        };
        //CRUD update
        $scope.update = function () {
            $scope.article.$update(function () {
                $location.path('articles/' + $scope.article._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        //CRUD delete
        $scope.delete = function (article) {
            if (article) {
                article.$remove(function () {
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1); //remove from list view
                        }
                    }
                });
            } else {
                $scope.article.$remove(function () { //remove single article from read view
                    $location.path('articles');
                });
            }
        };
    }
]);


