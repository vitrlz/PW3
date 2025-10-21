import { Router, RouterLink, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {


  passwordCerta: Number = 123456;
  userCerto: string='Boleg'
  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioLogin = this.fb.group({
      user: ['',[Validators.required, Validators.pattern("Boleg")]],
      password: ['',[Validators.required, Validators.pattern('123456')]],
    });
  }

  onSubmit() {
    let user = this.formularioLogin.get('user')?.value
    let password = this.formularioLogin.get('password')?.value

    //eu poderia ter feito essas validaçoes usardo forms.get('user').?errors?.['pattern']) e tals mas fiz diferente e não quis mexer
    if(password == this.passwordCerta && user == this.userCerto)
    {
      this.router.navigate(['/home']);
    }else if (password != this.passwordCerta && user != this.userCerto)
      {
        alert("ambas informações erradas")
      this.formularioLogin.get('user')?.setValue('')
      this.formularioLogin.get('password')?.setValue('')
      }
    else if(user != this.userCerto)
      {
        alert("usuario não encontrado")
        this.formularioLogin.get('user')?.setValue('')
      }
    else if(password != this.passwordCerta)
      {
        alert("senha incorreta")
        this.formularioLogin.get('password')?.setValue('')
      }
  }


}
