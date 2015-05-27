(function(){
    angular.module("app.pages")
        .controller("BenefitsCtrl",
        ["benefitsResource",
            BenefitsCtrl]);

    function BenefitsCtrl (benefitsResource) {
        var vm  = this;
        benefitsResource.query(function(data) {
            vm.benefits = data[0];
        });
    }
})();