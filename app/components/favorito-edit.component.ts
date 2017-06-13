import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-edit',
    templateUrl: 'app/views/favorito-add.html',
    providers: [FavoritoService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritoEditComponent implements OnInit
{
	public titleSection: string;
	public favorito: Favorito;
	public errorMessage;

	constructor(
		private _favoritoService: FavoritoService,
		private _route: ActivatedRoute,
		private _router: Router
		)
	{
		this.titleSection = "Editar favorito";	
	}

	ngOnInit()
	{
		this.favorito = new Favorito("", "", "", "");
		this.getFavorito();
	}

	getFavorito()
	{
		this._route.params.forEach((params: Params)=>
		{
			let id = params['id'];

			this._favoritoService.getFavorito(id).subscribe(
				response =>
				{
					this.favorito = response.favorito; //Objeto Favorito

					if(!this.favorito)
					{
						this._router.navigate(['/']); //nos lleva a la home
					}
				},
				error =>
				{
					
					this.errorMessage = <any> error;

					if(this.errorMessage != null)
					{
						console.log(this.errorMessage);
						alert('Error en la peticion');
					}
					
				}

			); //usa la funcion getFavorito de el service
		});
	}

	public onSubmit()
	{
		console.log(this.favorito);
		this._route.params.forEach((params: Params)=>{
			let id = params['id'];

			this._favoritoService.editFavorito(id, this.favorito).subscribe(
				response=>{

					if(!response.favorito)
					{
						alert('Error en el servidor');
					}
					else
					{
						this.favorito = response.favorito;	

						this._router.navigate(['/marcador', this.favorito._id])//te lleva a la pagina detalle del favorito
					}


				},
				error=>{
					this.errorMessage = <any>error;

					if(this.errorMessage != null)
					{
						console.log(this.errorMessage);
						alert('Error en la peticion');
					}
				}
				);
		});

	}
}