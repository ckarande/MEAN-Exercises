(function () {
    "use strict";

    angular
        .module("app.services.resources")
        .factory("profileResource",
                ["$resource",
                    profileResource]);

    function profileResource($resource) {
        return $resource("/api/profile");
    }

}());
