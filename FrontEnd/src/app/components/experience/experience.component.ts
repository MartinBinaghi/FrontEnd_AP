import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/services/token.service';
import { SExperienciaService } from '../../services/s-experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
  
  experience1:boolean = true;
  experience2:boolean = false;
  experience3:boolean = false;
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
  
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;});
  }
}

