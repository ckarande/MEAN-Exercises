(function () {
    "use strict";

    var app = angular
                .module("profileResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var profile = [{
            firstName: "a",
            lastName: "",
            bankAcc: "1111",
            bankRouting: "2222",
            ssn: "7777"
        }];
        var profileUrl = "/api/profile";

        $httpBackend.whenGET(profileUrl).respond(profile);

        // Pass through any requests for application files
        $httpBackend.whenGET(/pages/).passThrough();
    })
}());
