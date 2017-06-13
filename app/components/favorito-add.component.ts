import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-add',
    templateUrl: 'app/views/favorito-add.html',
    providers: [FavoritoService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritoAddComponent implements OnInit
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
		this.titleSection = "Crear favorito";	
	}

	ngOnInit()
	{
		this.favorito = new Favorito("", "", "", "");
	}

	public onSubmit()
	{
		console.log(this.favorito);

		this._favoritoService.addFavorito(this.favorito).subscribe(
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
	}
}