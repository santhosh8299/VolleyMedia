import { Component, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { HeaderService } from '../header/header.service';
import { UserDB,UserDetails,validationMessages } from './login.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean;
  loginForm: FormGroup;
  validationMessages: { [key: string]: { [key: string]: string } }=validationMessages;
  userList:UserDetails[] = UserDB
  
  get userid(): FormControl{
    return this.loginForm.get('userid') as FormControl
  }
  get password():FormControl{
    return this.loginForm.get('password') as FormControl
  }
  constructor(private fb: FormBuilder,
    private headerService: HeaderService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['',[Validators.required, this.dataMatch('userid')]],
      password: ['',[Validators.required, this.dataMatch('password')]]
    })
    this.headerService.loginSubject.subscribe(data=>{
      this.show = data
    })
    
  }

  dataMatch(field: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
    let validUser
    if(field === 'userid' && c.value!=''){
      validUser = this.userList.filter(userObj => userObj.userid === c.value)
    }else{
      validUser = this.userList.filter(userObj => userObj.password === c.value)
    }
    if(validUser.length === 0 && c.value!=''){
      return {'invalid': true}
    }
    return null
  }
}
  onSubmit(){
    //this.userid
    let formUserId = this.loginForm.value.userid
    let userDetails: UserDetails = this.userList.filter(userObj => userObj.userid == formUserId)[0]
    this.show = false;
    sessionStorage.setItem('userDetails',JSON.stringify(userDetails))
    this.headerService.loginDetailsSubject.next(this.loginForm.value)
    this.router.navigate(['/','home'])
  }
  cancel(){
    this.show=false;
    this.router.navigate(['/','home'])
  }
}
