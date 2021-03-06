import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  submitForm(name: string, photo: string, email: string, password: string, karma: number) {
    const newUser: User = new User(name, photo, email, password, karma);
    this.userService.addUser(newUser);
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // send to new-review page if logged in using:
    this.router.navigate(['add-review']);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
