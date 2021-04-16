import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  errors = [];
  contactForm: FormGroup = this._fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    subject: ['',Validators.required],
    message: ['',Validators.required],
  })

  constructor(private _fb: FormBuilder, private _contactService: ContactService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    //console.log(form);
    if(form.valid) {
      const msg = form.value;
      this._contactService.SendMessage(msg).subscribe(
        (res: any) => {
          console.log(res);
          this.errors = [];
        },
        (err: any) => {
          console.log(err);
          this.errors = err.error.error || [];
          
        }
      )
    }
  }

}
