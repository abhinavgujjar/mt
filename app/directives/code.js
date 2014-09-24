

angular.module('holiday').directive('code', function(){
    
    //directive definition object
    return {
        restrict : 'E',
        transclude : true,
        templateUrl : 'partials/code.html',
        scope : {
           title : '@'
        }
    }
});