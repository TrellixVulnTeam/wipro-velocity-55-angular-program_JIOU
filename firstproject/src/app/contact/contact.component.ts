import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: any;

  // Dependency Injection -  remove the dependent between two class - loose coupling

  // Amazon depends on Seller or Seller depends on Amazon
  // FormBuilder 
  // x = new FormBuilder();
  // Injecting the object inside constructor
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    alert("Contact Component Initialized")
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      desc: ['']
    })
  }
  getContactData() {
    alert('Submit Button Clicked')
    console.log(this.contactForm.value)
    console.log(this.contactForm.value.name)
    console.log(this.contactForm.value.email)
    console.log(this.contactForm.value.mobile)
    console.log(this.contactForm.value.desc)

  }

}
