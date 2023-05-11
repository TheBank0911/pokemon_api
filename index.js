var myapp = angular.module('app',[]);

myapp.controller('myCtroller',function($scope,$http){
    var link = "https://pokeapi.co/api/v2/pokemon/"
    $http.get(link).then(function (response){
        $scope.poke = response.data.results;
    },function (response){
        alert("Lỗi");
    });
    $scope.searchText = '';

    $scope.show = false;
    $scope.showList = function () {
        $scope.show = false;
    }
    $scope.click = function(name){
        $scope.show= true;
        $scope.name = name;
        $http.get("https://pokeapi.co/api/v2/pokemon/"+name).then(function (response){
            $scope.poke_image = response.data.sprites.other.home.front_default;
            $scope.height = response.data.height;
            $scope.weight = response.data.weight;
        },function (response){
            alert("Lỗi");
        });
    }
});