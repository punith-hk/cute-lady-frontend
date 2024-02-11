import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DressDataService } from 'src/app/services/dress-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: any;
  content: any;

  constructor(private router: Router,
    private dressDataService: DressDataService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onBack() {
    // this.router.navigateByUrl("login");
    this.dressDataService.getDressDetails().subscribe((res: any) => {
      console.log(res, "data fetched succesfully");
    })

  }

  onSend() {
    let data = {
      title: this.title,
      content: this.content
    }
    this.dressDataService.postNewDressDetails(data).subscribe((res: any) => {
      console.log(res.message);
    });
  }

}
