import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educ: Educacion = null;

  constructor(
    private sEducacion: SEducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe({
      next: (data) => {
        this.educ = data;
      },
      error: (err) => {
        alert('Error al editar educacion');
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educ).subscribe({
      next: (data) => {
        alert('Educacion actualizada correctamente');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al editar educacion');
        this.router.navigate(['/editedu/' + id]);
      },
    });
  }

}
