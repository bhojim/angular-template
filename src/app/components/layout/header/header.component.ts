import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public userSubscription: Subscription;
  user: User = null;

  constructor(private router: Router, private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
    // this.user = this.accountService.userValue;
  }

  login() {
    this.router.navigate(['/account/login']);
  }

  logout() {
    this.accountService.logout();
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.userSubscription.unsubscribe();
  }
}
