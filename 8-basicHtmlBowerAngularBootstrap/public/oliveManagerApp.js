angular.module('OliveApp', ['ngRoute']).config(function($routeProvider) {
    //the object $routeProvider is the object that allows us to configure and use the routes
    $routeProvider
        .when('/', {
            templateUrl: 'listOlive.html',
            controller: 'DataCtrl'
        })
        .when('/edit', {
            templateUrl: 'editDelivery.html',
            controller: 'EditCtrl'
        });
});