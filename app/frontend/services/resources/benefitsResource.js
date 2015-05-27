(function () {
    "use strict";

    angular
        .module("app.services.resources")
        .factory("benefitsResource",
                ["$resource",
                    benefitsResource]);

    function benefitsResource($resource) {
        return $resource("/api/benefits");
    }

}());
