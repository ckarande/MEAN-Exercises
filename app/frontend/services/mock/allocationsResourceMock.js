(function () {
    "use strict";

    var app = angular
                .module("allocationsResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var allocations = [{
            stocks: "10",
            bonds: "60",
            funds: "30",
            firstName: "a",
            lastName: "b"
        }];
        var allocationsUrl = "/api/allocations";
        var allocationsUrlRegex = new RegExp(allocationsUrl + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(allocationsUrlRegex).respond(allocations);

        // Pass through any requests for application files
        $httpBackend.whenGET(/pages/).passThrough();
    })
}());
