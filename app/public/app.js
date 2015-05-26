(function(){
    'use strict';
    var app = angular.module('retireEasy', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state("/", {
                url: "/dashboard",
                templateUrl: "pages/dashboard/dashboard.html"
            })
            .state("dashboard", {
                url: "/dashboard",
                templateUrl: "pages/dashboard/dashboard.html"
            })
            .state("contributions", {
                url: "/contributions",
                templateUrl: "pages/contributions/contributions.html",
                controller: "ContributionsCtrl as vm" /*,
                resolve: {
                    contributionsResource: "contributionsResource",
                    contributions: function (contributionsResource) {
                        return contributionsResource.get().$promise;
                    }
                }*/
            })
            .state("allocations", {
                url: "/allocations/:userId",
                templateUrl: "pages/allocations/allocations.html",
                controller: "AllocationsCtrl as vm"
            })
            .state("profile", {
                url: "/profile",
                templateUrl: "pages/profile/profile.html",
                controller: "ProfileCtrl as vm"
            })
            .state("benefits", {
                url: "/benefits",
                templateUrl: "pages/benefits/benefits.html",
                controller: "BenefitsCtrl as vm"
            });

    }]);

    app.controller('NavCtrl', function(){
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
