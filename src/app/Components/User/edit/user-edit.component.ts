import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Model/user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userService.getUsers().subscribe((req) => {
      //FIXME : separated route for get user.
      this.user = req.data.find(user => user.id = this.route.snapshot.params.id)
    });
  }

  ngOnInit(): void {

  }
}
