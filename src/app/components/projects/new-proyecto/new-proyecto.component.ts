import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  tituloP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  imgP: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.tituloP, this.descripcionP, this.linkP, this.imgP);
    this.sProyecto.save(proyecto).subscribe({
      next: (data) => {
      alert('Proyecto añadida correctamente');
      this.router.navigate(['']);
    }, 
    error: (err) => {
      alert('Error al añadir proyecto')
      this.router.navigate(['newproyecto']);
    }
    });
  }

}
