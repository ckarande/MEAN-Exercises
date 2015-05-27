(function () {
    "use strict";

    var app = angular
                .module("contributionsResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var contributions = {
            updateSuccess: false,
            updateError: false,
            preTax: "10",
            roth: "12",
            afterTax: "3"
        };
        var contributionsUrl = "/api/contributions";

        $httpBackend.whenGET(contributionsUrl).respond(contributions);

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    })
}());
