(function() {

    'use strict';

    angular.module('myApp', ['ngRoute', 'btford.socket-io'])
        .config(appConfig)

    appConfig.$inject = ['$routeProvider', '$httpProvider'];


    function appConfig($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/landing.html',
            }).when('/everything', {
                templateUrl: 'views/everything.html',
                controller: 'indexController',
                restricted: false,
                preventLoggedIn: false
            }).when('/comp', {
                templateUrl: 'views/comp.html',
                controller: 'mainController',
                restricted: false,
                preventLoggedIn: false
            }).when('/practice', {
                templateUrl: 'views/practice.html',
                controller: 'mainController',
                restricted: false,
                preventLoggedIn: false
            }).when('/upload', {
                templateUrl: 'views/upload.html',
                controller: 'uploadController',
                restricted: false,
                preventLoggedIn: false
            })
            .otherwise({
                redirectTo: '/'
            });
    }



})();