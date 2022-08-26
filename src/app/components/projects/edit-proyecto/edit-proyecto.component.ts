import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  constructor(
    private sProyecto: SProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe({
      next: (data) => {
        this.proyecto = data;
      },
      error: (err) => {
        alert('Error al editar proyecto');
        this.router.navigate(['']);
      }
   });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe({
      next: (data) => {
        alert('Proyecto actualizado correctamente');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al editar proyecto');
        this.router.navigate(['/editproyecto/' + id]);
      },
    });
  }

}
