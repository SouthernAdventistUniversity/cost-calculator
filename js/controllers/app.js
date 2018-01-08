(function() {
    'use strict';

    angular
        .module('CostCalculator')
        .controller('AppController', AppController);

    AppController.inject = ['$scope', '$http', '$sce'];

    function AppController($scope, $http, $sce) {

        $scope.activeTab = 0;
        $scope.student = {
            GPA: 2,
            RawActOrSatScore: 18,
            Age: 50,
            HouseHoldSize: 11,
            NumberInCollege: 6,
            SummerCampWeeks: 26,
            IsSdaHighSchoolGraduate: false
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
            if (query) {
                var lowercaseQuery = angular.lowercase(query);
                return $scope.states.filter(function(state) {
                    var state = angular.lowercase(state);
                    return (state.indexOf(lowercaseQuery) > -1)
                });
            } else return $scope.states;
        }

        ///////////////////////

        $scope.calculateCost = function(student) {
            console.log(student);
            //$http.jsonp('./php/proxy.php', { 
            $http.jsonp($sce.trustAsResourceUrl('https://genesis.intranet.southern.edu:8310/mvc/FinancialAidCalculator/efc/'), { 
                jsonpCallbackParam: 'callback', 
                parameters: student 
            }).then(function(e) {            
                console.log(e);
                $scope.result = e.data.result;
            })
        }

    }
})();