"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_component_1 = require("./components/favoritos-list.component");
var favoritos_detail_componet_1 = require("./components/favoritos-detail.componet");
var favorito_add_component_1 = require("./components/favorito-add.component");
var favorito_edit_component_1 = require("./components/favorito-edit.component");
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favoritos_detail_componet_1.FavoritoDetailComponent },
    { path: 'crear-marcador', component: favorito_add_component_1.FavoritoAddComponent },
    { path: 'editar-marcador/:id', component: favorito_edit_component_1.FavoritoEditComponent },
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent } //cuando es un 404, SI O SI TIENE QUE IR AL FINAL, SI NO TOMA COMO QUE NO EXISTE NINGUN URL
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map