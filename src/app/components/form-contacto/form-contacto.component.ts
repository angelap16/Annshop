import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {
  formGroup:FormGroup;
  Paises:any;

  constructor(
    private formBuilder:FormBuilder,
    private dataService: DataService
    ) { 
    this.formGroup=formBuilder.group({
      nombre:[' ', Validators.required], 
      correo: [' ',Validators.compose([Validators.email,Validators.required])],
      celular:[' ', Validators.required], 
      noidentificacion:[' ', Validators.required], 
      message:['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.ObtenerPaises()
  }
  enviar(){
    console.log(this.formGroup.value);
   let form=this.formGroup.value;
   let datos=localStorage.setItem('formulario', JSON.stringify(form));
  }

  ObtenerPaises(){
    this.dataService.getPaises().subscribe((recive:any)=>{
      this.Paises=recive
      console.log('paises', this.Paises);
    })
  }

}
