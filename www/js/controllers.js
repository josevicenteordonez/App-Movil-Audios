var controllerModule = angular.module('blank.controllers', []);
 
controllerModule.controller("AppCtrl", function($scope,$location, $state, $ionicPlatform, $cordovaOauth){
 
      $scope.go = function ( path ) {
        $location.path( path );
      };

    $scope.loginFacebook = function(){
         console.log("clicked");
         
         $ionicPlatform.ready(function() {
         
             $cordovaOauth.facebook("137259300073503", ["email"]).then(function(result) {
                //alert("Auth Success..!!"+result);
                $state.go('tab.todos');
           
           }, function(error) {
             //alert("Auth Failed..!!"+error);
             $state.go('login');
           });

        });

      };
});


//////////////////////////////
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

  $scope.showMore= function(Id){
    console.log("Mostrar" + Id);
    document.getElementById("itemautor"+ Id).classList.add("paddingmore");
    document.getElementById("btnplay"+ Id).classList.add("left1");
    document.getElementById("contieneautor"+ Id).classList.add("left2");
    document.getElementById("contieneautor"+ Id).classList.add("paddingcat");
    document.getElementById("more"+ Id).classList.remove("mostrar");
    document.getElementById("more"+ Id).classList.add("ocultar");
    document.getElementById("boton1"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton1"+ Id).classList.add("mostrar");
    document.getElementById("boton2"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton2"+ Id).classList.add("mostrar");
  };
  
  $scope.hideMore= function(Id){
    console.log("Ocultar" + Id);
    document.getElementById("itemautor"+ Id).classList.remove("paddingmore");
    document.getElementById("btnplay"+ Id).classList.remove("left1");
    document.getElementById("contieneautor"+ Id).classList.remove("left2");
    document.getElementById("contieneautor"+ Id).classList.remove("paddingcat");
    document.getElementById("more"+ Id).classList.remove("ocultar");
    document.getElementById("more"+ Id).classList.add("mostrar");
    document.getElementById("boton1"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton1"+ Id).classList.add("ocultar");
    document.getElementById("boton2"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton2"+ Id).classList.add("ocultar");
  };

  $scope.setFavourite= function(AudioId, AudioFav){
      
      console.log(AudioId);
      console.log(AudioFav);

      if(AudioFav){
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2Enable");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2");
      }else{
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2Enable");
      }

      var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/AudioFavs/Set',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53")+
        "&AudioId=" + encodeURIComponent(AudioId),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
       }

      $http(req).success(function(data){
          console.log(data);
        }).error(function(data){
          console.log(data);
        });
   };

});
//////////////////////////////
// Fin Controlador Autores


////////////////////////
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

  $scope.showMore= function(Id){
    console.log("Mostrar" + Id);
    document.getElementById("itemautor"+ Id).classList.add("paddingmore");
    document.getElementById("btnplay"+ Id).classList.add("left1");
    document.getElementById("contieneautor"+ Id).classList.add("left2");
    document.getElementById("contieneautor"+ Id).classList.add("paddingcat");
    document.getElementById("more"+ Id).classList.remove("mostrar");
    document.getElementById("more"+ Id).classList.add("ocultar");
    document.getElementById("boton1"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton1"+ Id).classList.add("mostrar");
    document.getElementById("boton2"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton2"+ Id).classList.add("mostrar");
  };
  
  $scope.hideMore= function(Id){
    console.log("Ocultar" + Id);
    document.getElementById("itemautor"+ Id).classList.remove("paddingmore");
    document.getElementById("btnplay"+ Id).classList.remove("left1");
    document.getElementById("contieneautor"+ Id).classList.remove("left2");
    document.getElementById("contieneautor"+ Id).classList.remove("paddingcat");
    document.getElementById("more"+ Id).classList.remove("ocultar");
    document.getElementById("more"+ Id).classList.add("mostrar");
    document.getElementById("boton1"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton1"+ Id).classList.add("ocultar");
    document.getElementById("boton2"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton2"+ Id).classList.add("ocultar");
  };


   $scope.setFavourite= function(AudioId, AudioFav){
      
      console.log(AudioId);
      console.log(AudioFav);

      if(AudioFav){
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2Enable");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2");
      }else{
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2Enable");
      }

      var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/AudioFavs/Set',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53")+
        "&AudioId=" + encodeURIComponent(AudioId),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
       }

      $http(req).success(function(data){
          console.log(data);
        }).error(function(data){
          console.log(data);
        });
   };

});
////////////////////////
// Fin Controlador Audios

////////////////////////
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

      // TODAS LAS CATEGORIAS
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
       // $ionicLoading.hide();
      }).error(function(data){
        console.log(data);
       // $ionicLoading.hide();
      });


      // CATEGORIAS FAVORITE
      var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/Audios/getFavourites',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }     
      }

      $scope.categorieFavourites = {
          'categorieFavourites' : {}
      }

      $http(req).success(function(data){
        $scope.categorieFavourites.categorieFavourites = data;
        $scope.categorieFavourites.categorieFavourites.Name = "Favoritos";
       // $ionicLoading.hide();
      }).error(function(data){
        console.log(data);
      //  $ionicLoading.hide();
      });

      // CATEGORIAS TRENDING
      var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/Audios/getTrending',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }     
      }

      $scope.categorieTrending = {
          'categorieTrending' : {}
      }

      $http(req).success(function(data){
        $scope.categorieTrending.categorieTrending = data;
        $scope.categorieTrending.categorieTrending.Name = "Tendencia";
       // $ionicLoading.hide();
      }).error(function(data){
        console.log(data);
      //  $ionicLoading.hide();
      });

      // CATEGORIAS NEWS
     var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/Audios/getNews',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53"),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }     
      }

      $scope.categorieNews = {
          'categorieNews' : {}
      }


      $http(req).success(function(data){
        $scope.categorieNews.categorieNews = data;
        $scope.categorieNews.categorieNews.Name = "Nuevos";
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
    
    if(categorie == "Trending"){
        categorie = $scope.categorieTrending.categorieTrending;
    }

    if(categorie == "News"){
        categorie = $scope.categorieNews.categorieNews;
    }

    if(categorie == "Favourites"){
        categorie = $scope.categorieFavourites.categorieFavourites;
    }

    $scope.model.categoriesDetails = categorie;
  
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

  $scope.showMore= function(Id){
    console.log("Mostrar" + Id);
    document.getElementById("itemautor"+ Id).classList.add("paddingmore");
    document.getElementById("btnplay"+ Id).classList.add("left1");
    document.getElementById("contieneautor"+ Id).classList.add("left2");
    document.getElementById("contieneautor"+ Id).classList.add("paddingcat");
    document.getElementById("more"+ Id).classList.remove("mostrar");
    document.getElementById("more"+ Id).classList.add("ocultar");
    document.getElementById("boton1"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton1"+ Id).classList.add("mostrar");
    document.getElementById("boton2"+ Id).classList.remove("ocultar"); 
    document.getElementById("boton2"+ Id).classList.add("mostrar");
  };
  
  $scope.hideMore= function(Id){
    console.log("Ocultar" + Id);
    document.getElementById("itemautor"+ Id).classList.remove("paddingmore");
    document.getElementById("btnplay"+ Id).classList.remove("left1");
    document.getElementById("contieneautor"+ Id).classList.remove("left2");
    document.getElementById("contieneautor"+ Id).classList.remove("paddingcat");
    document.getElementById("more"+ Id).classList.remove("ocultar");
    document.getElementById("more"+ Id).classList.add("mostrar");
    document.getElementById("boton1"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton1"+ Id).classList.add("ocultar");
    document.getElementById("boton2"+ Id).classList.remove("mostrar"); 
    document.getElementById("boton2"+ Id).classList.add("ocultar");
  };

  $scope.setFavourite= function(AudioId, AudioFav){
      
      console.log(AudioId);
      console.log(AudioFav);

      if(AudioFav){
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2Enable");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2");
      }else{
        document.getElementById("boton1"+ AudioId).classList.remove("contieneboton1");
        document.getElementById("detailboton1"+ AudioId).classList.remove("icondet2");
        document.getElementById("boton1"+ AudioId).classList.add("contieneboton1Enable");
        document.getElementById("detailboton1"+ AudioId).classList.add("icondet2Enable");
      }

      var req = {
        method: 'POST',
        url: 'http://auddiar.com.c9005.fangio.net/AudioFavs/Set',
        data: "UserId=" + encodeURIComponent("b6ee8ef0-d5e8-4411-a1da-87694280aa50") +
        "&Token=" + encodeURIComponent("a10b1f8d-9c6c-443e-906b-a8116f4b0f53")+
        "&AudioId=" + encodeURIComponent(AudioId),
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
       }

      $http(req).success(function(data){
          console.log(data);
        }).error(function(data){
          console.log(data);
        });
   };

});
////////////////////////
// Fin Controlador Categorias