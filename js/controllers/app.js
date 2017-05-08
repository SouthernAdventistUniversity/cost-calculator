(function() {
    'use strict';

    angular
        .module('CostCalculator')
        .controller('AppController', AppController);

    AppController.inject = ['$scope', '$http'];

    function AppController($scope, $http) {

        $scope.activeTab = 0;
        $scope.student = {};

        $scope.tabs = [{
                title: 'Entering College',
                url: 'views/entering_college.html'
            },
            {
                title: 'High School',
                url: 'views/high_school.html'
            },
            {
                title: 'About',
                url: 'views/about.html'
            },
            {
                title: 'Household',
                url: 'views/household.html'
            },
            {
                title: 'Residence',
                url: 'views/residence.html'
            },
            {
                title: 'Financial Aid',
                url: 'views/financial_aid.html'
            },
            {
                title: 'Cost',
                url: 'views/cost.html'
            },
        ]

    }
})();