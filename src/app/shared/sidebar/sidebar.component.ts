import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  get historial() {
    return this.srv.historial;
  }

  constructor(private srv: GifsService) { }

  buscar(keyword: string) {
    this.srv.buscarGifs(keyword);
    console.log(keyword);
  }

}
