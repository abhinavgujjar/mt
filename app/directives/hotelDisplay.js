

angular.module('holiday').directive('hotelDisplay', function(){
    
    //directive definition object
    return {
        restrict : 'E',
        templateUrl : 'partials/hoteldisplay.html',
        scope : {
           hotel : '='
        }
    }
});