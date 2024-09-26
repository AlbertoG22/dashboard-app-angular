import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat() // convertir el array de array en uno solo
    .filter( route => route && route.path ) // excluir ruta final que no tiene nada, la del 'redirectTo'
    .filter( route => !route.path?.includes(':') ); // excluir la ruta del usuario (/user/:id)

  constructor() {}

}
