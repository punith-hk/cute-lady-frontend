import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared-service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private sharedService: SharedService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onButtonClick() {
    this.sharedService.openSnackBar("done", "OKAY", "danger");
    this.router.navigateByUrl("home");
  }

}
