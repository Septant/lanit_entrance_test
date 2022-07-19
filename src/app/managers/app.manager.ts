import {Injectable} from '@angular/core';
import {ResponseService} from "../server/response.service";
import {RequestService} from "../server/request.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class AppManager {

  constructor(private responseService: ResponseService,
              private requestService: RequestService) {
  }

  public userList(): BehaviorSubject<User[]> {
    return this.responseService.userTable;
  }

  public getUserList(): void {
    this.requestService.getFriendList();
  }

  public updateUser(user: User) {
    this.requestService.putUpdateUser(user);
  }
}
