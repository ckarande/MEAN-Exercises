(function(){
    'use strict';
    var app = angular.module('retireEasy', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state("/", {
                url: "/dashboard",
                templateUrl: "views/dashboard.html"
            })
            .state("dashboard", {
                url: "/dashboard",
                templateUrl: "views/dashboard.html"
            })
            .state("contributions", {
                url: "/contributions",
                templateUrl: "views/contributions.html"
            })
            .state("allocations", {
                url: "/allocations/:userId",
                templateUrl: "views/allocations.html"
            })
            .state("profile", {
                url: "/profile",
                templateUrl: "views/profile.html"
            }).state("benefits", {
                url: "/benefits",
                templateUrl: "views/benefits.html"
            });
            //.state.go("/dashboard");
    }]);

    app.controller('LayoutCtrl', function(){
        var vm = this;
        vm.user = {
            isAdmin: false
        };
        vm.userId = 3;
        vm.title = 'dashboard';

        vm.firstName= "c";
        vm.lastName= "k";

    });

})();
