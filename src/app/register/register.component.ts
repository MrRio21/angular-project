import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  RegForm:FormGroup



  constructor(){
    this.RegForm = new FormGroup({
         
      RegName: new FormControl("",[
       Validators.required,
       Validators.minLength(3),
       Validators.maxLength(15)
     ]),


     RegEmail : new FormControl("",[Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") 
    ]),

    Regpass: new FormControl('', [Validators.required, 
      Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{8,16}$')
    ]),

    // RegConfirm: new FormControl('', [Validators.required, this.confirmpass])
          
  });
}

// private confirmpass() {
  
//   if (this.RegForm.value.Regpass === this.RegForm.value.RegConfirm) {
//     return true;
//   }else return false;
// }


  submitForm() {
console.log(this.RegForm)  
  }



}
