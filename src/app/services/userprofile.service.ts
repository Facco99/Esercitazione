import { Injectable } from '@angular/core';
import { UserProfileItem } from '../models/UserProfileInterface';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private registeredUser: UserProfileItem[]=[];

  constructor() { }
}
