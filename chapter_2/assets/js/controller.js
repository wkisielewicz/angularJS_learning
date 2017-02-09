// function AppCtrl ($scope) {
//   $scope.clickHandler = function() {
//     window.alert('Kliknięty')
//   }
// }
//

angular.module("app", []).controller("AppCtrl", function($scope) {
    $scope.clickHandler = function() {
        //window.alert('Kliknięty')
        $scope.isHidden = !$scope.isHidden;
    }


    $scope.contacts = [{
            name: 'Janko Walski',
            phone: '01234567890',
            email: 'janko@walski.com'
        },
        {
            name: 'Karen Nerka',
            phone: '09876543210',
            email: 'karenne@email.com'
        }
    ];


    $scope.styleDemo = function() {
        if (!$scope.styler) {
            return;
        }

        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };

});
