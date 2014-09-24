

angular.module('holiday').directive('preview', function(){
    
    //directive definition object
    return {
        restrict : 'E',
        templateUrl : 'partials/preview.html',
        scope : {
           entry : '=desc',
           rows : '@'
        }
    }
});