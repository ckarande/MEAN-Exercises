(function(){
    angular.module("retireEasy")
        .controller("BenefitsCtrl", [BenefitsCtrl]);

    function BenefitsCtrl () {
        var vm  = this;
        vm.firstName = "c";
        vm.lastname = "k";
        vm._id = "10";
        vm.benefitsStartDate = "12-2-2039";
    }
})();