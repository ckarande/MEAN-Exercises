(function(){
    angular.module("app.pages")
        .controller("AllocationsCtrl",
        ["allocationsResource",
            AllocationsCtrl]);

    function AllocationsCtrl (allocationsResource) {
        var vm  = this;
        allocationsResource.query(function(data) {
            vm.allocations = data[0];
        });
    }
})();