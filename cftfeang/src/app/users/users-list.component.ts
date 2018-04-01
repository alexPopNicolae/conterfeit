import { Component, OnInit } from "@angular/core";
import { IUser } from './user';
import { UserService } from "./user.service";

@Component({
    selector:'pm-users',
    templateUrl:'./users-list.component.html',
    styleUrls:['./users-list.component.css']
})
export class UsersList implements OnInit {

    constructor(private _userService:UserService) {}

    title:string = 'Asta e lista mea de useri'
    users:IUser[];

    ngOnInit() {
        this._userService.getUsers().subscribe(
        users => {
            this.users = users;
            console.log("astia sunt userii care vin de la backend!");
            console.log(users);
        }, 
        err => {

        });
    }

}