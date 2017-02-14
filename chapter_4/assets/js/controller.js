angular.module('contactsMgr', ['ngRoute'])

/*-----------------------------------
| Trasy
------------------------------------*/

.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    // Opcjonalnie
    $locationProvider.html5Mode(true);

})

/*-----------------------------------
| Filtr truncate
------------------------------------*/

.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

/*-----------------------------------
| kontroler index
------------------------------------*/

.controller('indexCtrl', function($scope){

})

/*-----------------------------------
| kontroler add
------------------------------------*/

.controller('addCtrl', function($scope){

})

/*-----------------------------------
| kontroler contact
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams){

    console.log($routeParams);

});
