import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {
  //persona: persona = null;
  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al editar educacion 1');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al editar educacion 2');
        this.router.navigate(['']);
      },
    });
  }

}
