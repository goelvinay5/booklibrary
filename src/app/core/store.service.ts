import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_USER = {
  name: 'DefaultName',
  age: 0,
  hoobit: 'DefaultHoobit'
} as User;

@Injectable()
export class StoreService {
  private userStateBS = new BehaviorSubject<User>(INITIAL_USER);
  
  constructor() { }

  updateUser(user: User){
    const OldUser : User = this.userStateBS.value;
    this.userStateBS.next( { ...OldUser, name: user.name, age: user.age } ); 
  }

  getStoreData(){
    return this.userStateBS.value;
  }
}

export interface User{
  name: string;
  age: number;
  hoobit: string;
}