(function(){
    angular.module("retireEasy")
        .controller("ContributionsCtrl",
        ["contributionsResource",
            ContributionsCtrl]);

    function ContributionsCtrl (contributionsResource) {
        var vm  = this;
        contributionsResource.query(function(data) {
            vm.contributions = data[0];
        });
    }
})();