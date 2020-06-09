angular.module('OliveApp', ['ui.bootstrap', 'ngRoute']).config(function($routeProvider) {
    //the object $routeProvider is the object that allows us to configure and use the routes
    $routeProvider
        .when('/', {
            templateUrl: 'listOlive.html',
            controller: 'DataCtrl'
        })
        .when('/options', {
            templateUrl: 'advancedOptions.html',
            controller: 'OptionsCtrl'
        })
		.when('/info', {
            templateUrl: 'info.html',
            controller: 'InfoCtrl'
        });
});