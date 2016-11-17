// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','blank.controllers','ngCordova','ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$httpProvider) {

    //To keep the tabs always in top
  $ionicConfigProvider.tabs.position('top');
 
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  .state('tabmusica', {
    url: '/tabmusica',
    abstract: true,
    templateUrl: 'templates/tabsmusica.html'
  })
  // Each tab has its own nav history stack:
  .state('tab.todos', {
    url: '/todos',
    views: {
      'tab-todos': {
        templateUrl: 'templates/tab-todos.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.mios', {
    url: '/mios',
    views: {
      'tab-mios': {
        templateUrl: 'templates/tab-mios.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('tab.favoritos', {
    url: '/favoritos',
    views: {
      'tab-favoritos': {
        templateUrl: 'templates/tab-favoritos.html',
        controller: 'AppCtrl'
      }
    }
  })
   .state('tabmusica.autores', {
    url: '/autores',
    views: {
      'tab-autores': {
        templateUrl: 'templates/tab-autores.html',
        controller: 'AuthorsCtrl'
      }
    }
  })
  .state('tabmusica.categoria', {
    url: '/categoria',
    views: {
      'tab-categoria': {
        templateUrl: 'templates/tab-categoria.html',
        controller: 'CategoriesCtrl'
      }
    }
  })
    .state('tabmusica.todos', {
    url: '/todos',
    views: {
      'tab-musicatodos': {
        templateUrl: 'templates/tab-musicatodos.html',
        controller: 'AudiosCtrl'
      }
    }
  })  
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'AppCtrl'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'AppCtrl'
    })

    .state('crear', {
      url: '/crear',
      templateUrl: 'templates/crear.html',
      controller: 'AppCtrl'
    })
    .state('musica', {
    url: '/musica',
    templateUrl: 'templates/musica.html',
    controller: 'AppCtrl'
  })
    .state('autordetalle', {
    url: '/autordetalle',
    templateUrl: 'templates/autordetalle.html',
    controller: 'AppCtrl'
  })
    .state('categoriadetalle', {
    url: '/categoriadetalle',
    templateUrl: 'templates/categoriadetalle.html',
    controller: 'AppCtrl'
  })    
      .state('cat.uno', {
    url: '/uno',
    views: {
      'cat-uno': {
        templateUrl: 'templates/cat-uno.html',
        controller: 'AppCtrl'
      }
    }
  })
/*
    .state('auditor-todos', {
      url: '/auditor-todos',
      templateUrl: 'templates/auditor-todos.html',
      controller: 'AppCtrl'
    })

    .state('auditor-mios', {
      url: '/auditor-mios',
      templateUrl: 'templates/auditor-mios.html',
      controller: 'AppCtrl'
    })*/
    ;
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
 
});
