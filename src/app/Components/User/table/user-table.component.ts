import {Component, OnInit} from '@angular/core';
import {User, CIVIL_STATES} from "../../../Model/user";
import {UserService} from "../../../Services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {
  users: User[];
  usersToShow: User[];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(private userService: UserService, private toast: ToastrService) {
    this.users = [];
    this.usersToShow = [];
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((requestResponse) => {
      this.assignUsers(requestResponse.data);
    });
  }

  eliminateUser(userToDelete: User) {
    this.userService.getToken().subscribe((response) => {
      this.userService.eliminate(userToDelete, response.token).subscribe((response) => {
        if (response.success) {
          this.userService.getUsers().subscribe((requestResponse) => {
            this.assignUsers(requestResponse.data);
            this.toast.success('Has eliminado al usuario con éxito');
          });
        } else {
          this.toast.error('No se ha podido eliminar al usuario');
        }
      })
    });
  }

  assignUsers(users: User[]): void {
    this.users = users;
    this.refreshUsers();
  }

  refreshUsers(): void {
    this.collectionSize = this.users.length;
    this.usersToShow = this.users.map((user, i) => ({count: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

  }

  translateCivilStatus(status: number) {
    return CIVIL_STATES[status];
  }
}

