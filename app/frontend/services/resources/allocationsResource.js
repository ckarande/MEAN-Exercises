(function () {
    "use strict";

    angular
        .module("app.services.resources")
        .factory("allocationsResource",
                ["$resource",
                    allocationsResource]);

    function allocationsResource($resource) {
        return $resource("/api/allocations/:userId");
    }

}());
