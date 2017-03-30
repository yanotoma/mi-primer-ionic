angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.numero = 0;

  //solo ingresa una vez la primera vez que carga
  $scope.$on('$ionicView.loaded', function(){
    console.log('Cargó la vista');
  });

  //cada vez que se ingresa a la vista
  $scope.$on('$ionicView.enter', function(){
    console.log('Entró a la vista');
    $scope.numero++;
  });
  //cada vez que se cambia de pantalla
  $scope.$on('$ionicView.leave', function(){
    console.log('Saliendo de la vista');
  });

  console.log('ChatsCtrl');

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log('ChatDetailCtrl');
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  console.log('AccountCtrl');
  $scope.settings = {
    enableFriends: true
  };
})
.controller('PerfilCtrl', function($scope){
  
})
.controller('LoginCtrl', 
  function($scope, $ionicPopup, $state){
  
  $scope.user = {
    usuario: '',
    clave: ''
  };

  $scope.onSubmit = function(){
    var message = '';

    if($scope.user.usuario.trim().length == 0){
      message = 'Debes ingresar el usuario';
    }else if($scope.user.clave.trim().length == 0){
      message = 'Debes ingresar la clave';
    }else{
      //todo ok
      $state.go('tab.perfil');
    }

    if(message != ''){
      console.log(message);
      var alerta = $ionicPopup.alert({
        title: 'Este es el título',
        template: message
      });
    }

  }

});










