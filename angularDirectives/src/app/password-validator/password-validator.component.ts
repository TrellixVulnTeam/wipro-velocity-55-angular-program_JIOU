import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent implements OnInit {


  @Input() childTitle = ''
  @Output() event = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  validatePassword(password: string) {

    let errorMsg = ''
    alert(password)
    if (!(password.length > 8 && password.length < 20)) {
      errorMsg = 'Password length is greater than the specified length.'
    }
    else {
      errorMsg = 'Valid Password'
    }
    this.event.emit(errorMsg)
  }

}
