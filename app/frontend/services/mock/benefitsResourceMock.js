(function () {
    "use strict";

    var app = angular
                .module("benefitsResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var benefits = [{
            updateError: false,
            updateSuccess: false,
            users: [
                {
                    _id: "10",
                    firstName: "c",
                    lastName: "k",
                    benefitStartDate: "2039-12-02"
                }, {
                    _id: "11",
                    firstName: "a",
                    lastName: "b",
                    benefitStartDate: "2029-12-21"
                }, {
                    _id: "12",
                    firstName: "p",
                    lastName: "k",
                    benefitStartDate: "2019-02-02"
                }

            ]

        }];
        var benefitsUrl = "/api/benefits";

        $httpBackend.whenGET(benefitsUrl).respond(benefits);

        // Pass through any requests for application files
        $httpBackend.whenGET(/pages/).passThrough();
    })
}());
