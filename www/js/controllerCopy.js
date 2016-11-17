var controllerModule = angular.module('blank.controllers', []);
 
controllerModule.controller("AppCtrl", function($scope,$location, $state, $ionicPlatform, $cordovaOauth){
 
      $scope.go = function ( path ) {
        $location.path( path );
      };

    $scope.loginFacebook = function(){
         console.log("clicked");
         
         $ionicPlatform.ready(function() {
         
             $cordovaOauth.facebook("137259300073503", ["email"]).then(function(result) {
                alert("Auth Success..!!"+result);
                $state.go('tab.todos');
           
           }, function(error) {
             alert("Auth Failed..!!"+error);
             $state.go('login');
           });

        });

      };
});

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Codigo Jv

// Controlador Autores
controllerModule.controller('AuthorsCtrl',function($scope, $rootScope,$http, $ionicLoading){

  $scope.loadAuthorsRefresh = function(){

    var req = {
      method: 'POST',
      url: 'http://auddiar.com.c9005.fangio.net/Authors/GetAuthorsTab',
      data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
      "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }     
    }

    $scope.model = {
        'authors': []
    }

    $http(req).success(function(data){
      $scope.model.authors = data.Authors;
      //console.log($scope.model.authors);
      $ionicLoading.hide();
    }).error(function(data){
      console.log(data);
      $ionicLoading.hide();
    }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    });

  }

  $scope.loadAuthors = function(){

  $ionicLoading.show();

    var req = {
      method: 'POST',
      url: 'http://auddiar.com.c9005.fangio.net/Authors/GetAuthorsTab',
      data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
      "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }     
    }

    $scope.model = {
        'authors': []
    }

    $http(req).success(function(data){
      $scope.model.authors = data.Authors;
      //console.log($scope.model.authors);
      $ionicLoading.hide();
    }).error(function(data){
      console.log(data);
      $ionicLoading.hide();
    });

  }

  $scope.loadAuthors();

  $scope.model = {
      'authorsDetails': {}
  }

  $scope.showAutdet= function(autor){
    //console.log(autor);
    $scope.model.authorsDetails = autor;
    console.log($scope.model.authorsDetails);
    document.getElementById("vista-autores").classList.remove("mostrar");
    document.getElementById("vista-autores").classList.add("ocultar");
    document.getElementById("autordetalle").classList.remove("ocultar");
    document.getElementById("autordetalle").classList.add("mostrar");
  };

  $scope.hideAutdet= function(){
    document.getElementById("autordetalle").classList.remove("mostrar");
    document.getElementById("autordetalle").classList.add("ocultar");
    document.getElementById("vista-autores").classList.remove("ocultar"); 
    document.getElementById("vista-autores").classList.add("mostrar");
  };

});



// Controlador Audios
controllerModule.controller('AudiosCtrl',function($scope, $rootScope,$http, $ionicLoading){

  $scope.loadAudiosRefresh = function(){
    var req = {
      method: 'POST',
      url: 'http://auddiar.com.c9005.fangio.net/Audios/getAudiosTab',
      data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
      "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }     
    }

    $scope.model = {
        'audios': []
    }

    $http(req).success(function(data){
      $scope.model.audios = data.Audios;
      console.log($scope.model.audios);
      $ionicLoading.hide();
    }).error(function(data){
      console.log(data);
      $ionicLoading.hide();
    }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    });

  }

  $scope.loadAudios= function(){

  $ionicLoading.show();

  var req = {
    method: 'POST',
    url: 'http://auddiar.com.c9005.fangio.net/Audios/getAudiosTab',
    data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
    "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    }     
  }

  $scope.model = {
      'audios': []
  }

  $http(req).success(function(data){
    $scope.model.audios = data.Audios;
    console.log($scope.model.audios);
    $ionicLoading.hide();
  }).error(function(data){
    console.log(data);
    $ionicLoading.hide();
  });

  }

  $scope.loadAudios();

});


// Controlador Categorias
controllerModule.controller('CategoriesCtrl',function($scope, $rootScope,$http, $ionicLoading){


  $scope.loadCategoriesRefresh = function(){

      var req = {
      method: 'POST',
      url: 'http://auddiar.com.c9005.fangio.net/Categories/GetCategoriesTab',
      data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
      "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      }     
    }

      $scope.model = {
          'categories': []
      }

      $http(req).success(function(data){
        $scope.model.categories = data.Categories;
        console.log($scope.model.categories);
        $ionicLoading.hide();
      }).error(function(data){
        console.log(data);
        $ionicLoading.hide();
      }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    });

  }

  $scope.loadCategories= function(){

  $ionicLoading.show();

  var req = {
    method: 'POST',
    url: 'http://auddiar.com.c9005.fangio.net/Categories/GetCategoriesTab',
    data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
    "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    }     
  }

  $scope.model = {
      'categories': []
  }

  $http(req).success(function(data){
    $scope.model.categories = data.Categories;
    console.log($scope.model.categories);
    $ionicLoading.hide();
  }).error(function(data){
    console.log(data);
    $ionicLoading.hide();
  });

  }

  $scope.loadCategories();

  $scope.model = {
      'categoriesDetails': {}
  }

  $scope.showCatdet= function(categorie){
    //console.log(categorie);
    $scope.model.categoriesDetails = categorie;
    console.log($scope.model.categoriesDetails);
    document.getElementById("categorias").classList.remove("mostrar");
    document.getElementById("categorias").classList.add("ocultar");
    document.getElementById("categoriadetalle").classList.remove("ocultar");
    document.getElementById("categoriadetalle").classList.add("mostrar");
  };

  $scope.hideCatdet= function(){
    document.getElementById("categoriadetalle").classList.remove("mostrar");
    document.getElementById("categoriadetalle").classList.add("ocultar");
    document.getElementById("categorias").classList.remove("ocultar");  
    document.getElementById("categorias").classList.add("mostrar");
  };

});
