(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("contributionsResource",
                ["$resource",
                    contributionsResource]);

    function contributionsResource($resource) {
        return $resource("/api/contributions");
    }

}());
