(function () {
    "use strict";

    angular
        .module("app.services.resources")
        .factory("contributionsResource",
                ["$resource",
                    contributionsResource]);

    function contributionsResource($resource) {
        return $resource("/api/contributions");
    }

}());
