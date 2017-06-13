"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var favorito_service_1 = require("../services/favorito.service");
var favorito_1 = require("../models/favorito");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var FavoritoEditComponent = (function () {
    function FavoritoEditComponent(_favoritoService, _route, _router) {
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.titleSection = "Editar favorito";
    }
    FavoritoEditComponent.prototype.ngOnInit = function () {
        this.favorito = new favorito_1.Favorito("", "", "", "");
        this.getFavorito();
    };
    FavoritoEditComponent.prototype.getFavorito = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._favoritoService.getFavorito(id).subscribe(function (response) {
                _this.favorito = response.favorito; //Objeto Favorito
                if (!_this.favorito) {
                    _this._router.navigate(['/']); //nos lleva a la home
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert('Error en la peticion');
                }
            }); //usa la funcion getFavorito de el service
        });
    };
    FavoritoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.favorito);
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._favoritoService.editFavorito(id, _this.favorito).subscribe(function (response) {
                if (!response.favorito) {
                    alert('Error en el servidor');
                }
                else {
                    _this.favorito = response.favorito;
                    _this._router.navigate(['/marcador', _this.favorito._id]); //te lleva a la pagina detalle del favorito
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    console.log(_this.errorMessage);
                    alert('Error en la peticion');
                }
            });
        });
    };
    return FavoritoEditComponent;
}());
FavoritoEditComponent = __decorate([
    core_1.Component({
        selector: 'favorito-edit',
        templateUrl: 'app/views/favorito-add.html',
        providers: [favorito_service_1.FavoritoService]
    })
    // Clase del componente donde irán los datos y funcionalidades
    ,
    __metadata("design:paramtypes", [favorito_service_1.FavoritoService,
        router_1.ActivatedRoute,
        router_1.Router])
], FavoritoEditComponent);
exports.FavoritoEditComponent = FavoritoEditComponent;
//# sourceMappingURL=favorito-edit.component.js.map