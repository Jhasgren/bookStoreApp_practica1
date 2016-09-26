(function() {
    var app = angular.module('store', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
        $stateProvider
            .state('home', {
                templateUrl: "home.html",
                controller: "StoreController"
            })
            .state('detalle', {
                templateUrl: "detalle.html",
                controller: "DetailController",
                params: {
                    idLibro: null
                }
            })
    });
    app.controller('MainController', function($scope, $state) {
        $state.go("home");
    });
    app.controller('StoreController', function($scope, $state) {
        this.libros = datos;
    });
    app.controller('DetailController', function($scope, $state, $stateParams) {
        var indice = $stateParams.idLibro;
        $scope.libro = datos[indice];
    });
    var datos = [{
        id: 1,
        titulo: "El Juego de Ender",
        autor: "Orson Scott Card",
        editorial: "Ediciones B / Zeta",
        descripcion: "La tierra esta amezada por insectos",
        img: "img/img1.jpg"
    }, {
        id: 2,
        titulo: "Juego de tronos",
        autor: "George R. R. Martin",
        editorial: "Gilgamesh",
        descripcion: "Tras el largo verano el invierno se acerca a los 7 reinos",
        img: "img/img2.jpg"
    }, {
        id: 3,
        titulo: "I Robot",
        autor: "Issac Asimov",
        editorial: "Edhasa",
        descripcion: "Los robots de Isaac Asimov",
        img: "img/img3.jpg"
    }];

})();
