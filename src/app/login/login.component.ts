import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @Input() email: string = '';
    @Input() password: string = '';
  
    hide: boolean = true;
  
    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['./dashboard']);
        }
    }
  
    login() {
        // todo validate input
        this.authService.login(this.email, this.password)
        .subscribe((data: any) => {
          console.log('get token')
          localStorage.getItem('token');
          this.router.navigate(['./dashboard']);
        });
    }
}