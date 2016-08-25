var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
  $scope.data = {text: 'hello world!'};
});

app.filter('capitalizeFirst', function(){
  return function(string){
    return string[0].toUpperCase() + string.slice(1);
  };
});
