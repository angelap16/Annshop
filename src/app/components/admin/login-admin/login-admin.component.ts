import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  usuario='administrador1';
  contraseña='1';
  inputUser='';
  inputPassword='';;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  inicio(){
    if(this.inputUser==this.usuario && this.inputPassword==this.contraseña){
      this.router.navigate(['/admin/inicio'])
    }else{
      alert('contraseña invalida')
    }
  }

}
