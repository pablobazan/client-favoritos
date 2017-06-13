import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { FavoritosListComponent } from './components/favoritos-list.component';
import { FavoritoDetailComponent } from './components/favoritos-detail.componet'; 
import { FavoritoAddComponent } from './components/favorito-add.component';
import { FavoritoEditComponent } from './components/favorito-edit.component';

const appRoutes: Routes = [
	{ path: '', component: FavoritosListComponent }, //cuando no existe ruta
	{ path: 'marcador/:id', component: FavoritoDetailComponent },
	{ path: 'crear-marcador', component: FavoritoAddComponent },
	{ path: 'editar-marcador/:id', component: FavoritoEditComponent },
	{ path: '**', component: FavoritosListComponent} //cuando es un 404, SI O SI TIENE QUE IR AL FINAL, SI NO TOMA COMO QUE NO EXISTE NINGUN URL
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
