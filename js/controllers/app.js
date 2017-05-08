(function() {
    'use strict';

    angular
        .module('CostCalculator')
        .controller('AppController', AppController);

    AppController.inject = ['$scope', '$http'];

    function AppController($scope, $http) {

        $scope.activeTab = 0;
        $scope.student = {
            gpa: 2,
            test_score: 18,
            age: 50,
            household_size: 11,
            number_in_college: 6
        };
        $scope.states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"];

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
        ];

        /////////////////////////

        $scope.querySearch = function(query) {
            console.log(query)
            if (query) {
                var lowercaseQuery = angular.lowercase(query);
                return $scope.states.filter(function(state) {
                    var state = angular.lowercase(state);
                    console.log(state.indexOf(lowercaseQuery));
                    return (state.indexOf(lowercaseQuery) > -1)
                });
            } else return $scope.states;
        }

    }
})();