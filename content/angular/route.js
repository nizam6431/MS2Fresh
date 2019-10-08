var config = (function (ng) {
    'use strict';

    function Route($ocLazyLoadProvider, $stateProvider, $urlRouterProvider,
        $controllerProvider, $compileProvider, $filterProvider, $provide) {

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;

        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../../pages/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'lCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/login/login.js']
                        });
                    }]
                }
            }).state('home', {
                url: '/home',
                templateUrl: '../../pages/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'hCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/home/home.js']
                        });
                    }]
                }
            }).state('fish', {
                url: '/fish',
                templateUrl: '../../pages/fish/fish.html',
                controller: 'fishCtrl',
                controllerAs: 'fCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/fish/fish.js']
                        });
                    }]
                }
            }).state('details', {
                url: '/details',
                templateUrl: '../../pages/details/details.html',
                controller: 'detailCtrl',
                controllerAs: 'dCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/details/details.js']
                        });
                    }]
                }
            }).state('freshWaterFish', {
                url: '/freshWaterFish',
                templateUrl: '../pages/freshWaterFish/freshWaterFish.html',
                controller: 'feshWaterFishCtrl',
                controllerAs: 'fwCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/freshWaterFish/freshWaterFish.js']
                        });
                    }]
                }
            }).state('prawns', {
                url: '/prawns',
                templateUrl: '../pages/prawns/prawns.html',
                controller: 'prawnsCtrl',
                controllerAs: 'pCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/prawns/prawns.js']
                        });
                    }]
                }
            }).state('crabLobster', {
                url: '/crabLobster',
                templateUrl: '../pages/crabLobster/crabLobster.html',
                controller: 'crabLobsterCtrl',
                controllerAs: 'clCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../../pages/crabLobster/crabLobster.js']
                        });
                    }]
                }
            });

        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });

        // $locationProvider.html5Mode(true);
    }

    ng.config(Route);

    ng.$inject = [
        '$ocLazyLoadProvider',
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide'
    ];

})(app);