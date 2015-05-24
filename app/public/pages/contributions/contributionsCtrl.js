(function(){
    angular.module("retireEasy")
        .controller("ContributionsCtrl", [ContributionsCtrl]);

    function ContributionsCtrl () {
        var vm  = this;
        vm.updateSuccess = false;
        vm.updateError = false;
        vm.preTax = "10";
        vm.roth = "2";
        vm.afterTax = "1";
    }
})();