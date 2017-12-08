import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { SignupModel } from "./signup.model";
import { SignupService } from "./signup.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    signup: SignupModel = new SignupModel();
    constructor(private router: Router, private signupService: SignupService) { }

    ngOnInit() { }

    onSignup(signup) {
        this.signupService.signup(signup).then((data) => {
            console.log(data);
            this.router.navigate(['/account']);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('userLoggedin', JSON.stringify(data));
        }, (error) => {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            } else {

            }
        });
    }
}
