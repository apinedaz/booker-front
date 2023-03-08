import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public option: any[];

  constructor(private router: Router){
    this.option = [
      {'nombre': 'Perfiles','icon': ''},
      {'nombre': 'Ultimos agregados','icon':''},
      {'nombre':'Categorias','icon': ''},
      {'nombre':'Carreras','icon':''},
      {'nombre': 'Realizar donacion','icon':''},
      {'nombre': 'Preguntas frecuentes','icon': ''},
      {'nombre': '¿Quienes somos?', 'icon':''}
    ];

  }

  public logout():void{
    this.router.navigate(['login']);
  }
}
