import {Component, OnInit} from '@angular/core';
import {CIVIL_STATES, User} from "../../../Model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../Services/user.service";
import {ToastrService} from "ngx-toastr";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  date: NgbDateStruct | undefined
  model = new User(0, "", "", "", "", 0)
  civilStatuses = Object.keys(CIVIL_STATES).map((key, index) => ({key: key, value: CIVIL_STATES[index]}));

  userForm = new FormGroup({
    name: new FormControl(this.model.name, [
      Validators.required,
    ]),
    phone: new FormControl(this.model.phone, [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(12),
    ]),
    email: new FormControl(this.model.phone, [
      Validators.required,
      Validators.email
    ]),
    civil_status: new FormControl(this.model.civil_status, [
      Validators.required
    ]),
    birth_date: new FormControl(this.model.birth_date, [
      Validators.required
    ])
  });

  constructor(private userService: UserService, private toast: ToastrService) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.userForm.valid) {
      this.model.birth_date = this.date?.year + "-" + this.date?.month + "-" + this.date?.day;
      this.userService.getToken().subscribe((response) => {
        this.userService.create(this.model, response.token).subscribe((res) => {
          if (res.success) {
            this.toast.success('Se ha guardado con éxito');
            this.userForm.reset();
          } else {
            this.toast.error(res.message);
          }
        })
      });
    }else {
      this.toast.error("Necesita corregir campos obligatorios")
    }
  }
}
